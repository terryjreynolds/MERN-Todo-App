(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},20:function(e,t){var a={truncateDate:function(e){var t=e;console.log(t);var a=t.match(/(.*):\d{2}/g);return console.log("truncatedDate",a),a}};e.exports=a},35:function(e,t,a){e.exports=a(66)},40:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(32),l=a.n(o),r=(a(40),a(3)),i=a(4),c=a(6),u=a(5),d=a(7),h=a(2),m=a(8),p=a.n(m),g=a(20),f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).addTodo=function(e){e.preventDefault();var t=Object(h.a)(Object(h.a)(a)),n={action:a.state.action,edited:a.state.edited[0]};console.log("task",n),n.action&&n.action.length>0&&p.a.put("/api/todos",n).then(function(e){if(console.log("res",e),e.data.hasOwnProperty("failure")){var n=[];n.push(e.data.failure),console.log("messages",n);n.forEach(function(e,t){return function(a,n){setTimeout(function(){e(a)},n*t)}}(function(e){console.log(e),t.props.controlDisplayFlash(!0,e)},2e3)),setTimeout(function(){t.setState({action:"",edited:[]})},2e3)}else e.data&&(a.props.getTodos(),t.setState({action:""}))}).catch(function(e){return console.log(e)})},a.handleChange=function(e){a.setState({action:e.target.value})},a.textInput=s.a.createRef(),a.state={action:"",edited:Object(g.truncateDate)(Date())},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"componentDidUpdate",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){console.log("rendering input");var e=this.state.action;return s.a.createElement("div",null,s.a.createElement("form",{onSubmit:this.addTodo},s.a.createElement("input",{style:{marginTop:"1vw"},ref:this.textInput,placeholder:"Create a new to-do item",type:"text",onChange:this.handleChange,value:e}),s.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(n.Component),w=function(e){var t=e.style,a=void 0===t?{}:t,n=e.fill,o=void 0===n?"#020202":n,l=e.className,r=void 0===l?"":l,i=e.width,c=void 0===i?"":i,u=e.height,d=void 0===u?"":u;return s.a.createElement("svg",{className:r,width:c,style:a,height:d,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"edit",class:"svg-inline--fa fa-edit fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},s.a.createElement("path",{fill:o,d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}))},v=function(e){var t=e.style,a=void 0===t?{}:t,n=e.fill,o=void 0===n?"#020202":n,l=e.width,r=void 0===l?"":l,i=e.display,c=void 0===i?"":i;return s.a.createElement("svg",{display:c,width:r,style:a,height:r,"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",class:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},s.a.createElement("path",{fill:o,d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"}))},b=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos;console.log("todos",t);var a={float:"right"},n={marginTop:"8px"};return s.a.createElement("ul",null,t&&t.length>0?t.map(function(t){return s.a.createElement("li",{key:t._id},s.a.createElement("input",{type:"checkbox",className:"checkbox"}),t.action,s.a.createElement("div",{style:a,disabled:!!e.props.show,onClick:function(){return e.props.deleteTodo(t._id)}},s.a.createElement(v,{width:"3vw",style:n})),s.a.createElement("div",{style:a,disabled:!!e.props.show,onClick:function(){return e.props.editTodoModal(t._id,t.action)}},s.a.createElement(w,{width:"4vw"})),s.a.createElement("div",{className:"date"},"last edited: ",t.edited))}):s.a.createElement("li",null,"No todo(s)"))}}]),t}(n.Component),y=(a(19),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFocus=function(e){e.target.select()},a.modalInput=s.a.createRef(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){this.modalInput.current.focus()}},{key:"render",value:function(){return console.log("rendering Modal"),s.a.createElement("form",{className:this.props.show?"showModal":"hideModal",onSubmit:this.props.sendModalActionToDatabase},s.a.createElement("input",{onFocus:this.handleFocus,ref:this.modalInput,className:"modalInput",onChange:this.props.modalUpdate,type:"text",value:this.props.action}),s.a.createElement("button",null,"Submit"),s.a.createElement("button",{onClick:this.props.cancelEditing},"Cancel"))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).findUserName=function(){console.log("infindUserName");var e=a.props.location.state.username;return console.log("user",e),e||""},a.getTodos=function(){p.a.get("/api/get/todos").then(function(e){e.data?(console.log("resdata",e.data),a.setState({todos:e.data,show:!1,action:"",editableId:""})):console.log("nothing")}).catch(function(e){return console.log(e)})},a.deleteTodo=function(e){p.a.delete("/api/delete/todos/".concat(e)).then(function(e){e.data&&a.getTodos()}).catch(function(e){return console.log(e)})},a.editTodoModal=function(e,t){a.setState({show:!0,action:t,editableId:e,date:Object(g.truncateDate)(Date(Date.now))}),console.log("im in showmodal",e,t)},a.modalUpdate=function(e){a.setState({action:e.target.value})},a.sendModalActionToDatabase=function(e){e.preventDefault(),console.log("im in sendModalActionToDatabase"),console.log("todoarray",a.state.todos),console.log("editableId",a.state.editableId),p.a.put("/api/update/todos/".concat(a.state.editableId,"/").concat(a.state.action,"/").concat(a.state.date)).then(function(e){e.data&&(console.log("send Modal resdata",e.data),a.getTodos())}).catch(function(e){return console.log(e)})},a.cancelEditing=function(){a.setState({show:!1,action:"",editableId:""})},a.controlDisplayFlash=function(e,t){console.log("in controlDisplayFlash"),a.setState({displayFlash:e,msg:t});var n=Object(h.a)(Object(h.a)(a));setTimeout(function(){n.setState({displayFlash:!1,msg:""}),console.log("stateafterTodoflash",this.state)},2e3)},a.state={todos:[],show:!1,action:"",editableId:"",buttonState:"",date:"",displayFlash:!1,msg:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getTodos()}},{key:"render",value:function(){console.log("rendering Todo");var e=this.state.todos;console.log("todos",e);var t="".concat(this.props==={}?"The Obligatory Todo App":"Welcome, ".concat(this.props.location?this.props.location.state.username:"","!"));return s.a.createElement("div",{className:"slideIn"},s.a.createElement("h1",null,t),s.a.createElement("h5",{className:this.state.displayFlash?"displayFlash":"hideFlash"},this.state.msg),s.a.createElement(y,{cancelEditing:this.cancelEditing,modalUpdate:this.modalUpdate,sendModalActionToDatabase:this.sendModalActionToDatabase,action:this.state.action,editableId:this.state.editableId,show:this.state.show}),s.a.createElement("div",{className:this.state.show?"hideInput":"showInput"},s.a.createElement(f,{controlDisplayFlash:this.controlDisplayFlash,getTodos:this.getTodos})),s.a.createElement(b,{show:this.state.show,editTodoModal:this.editTodoModal,onFocus:this.onFocus,todos:e,deleteTodo:this.deleteTodo}))}}]),t}(n.Component),S=a(15),O=a(10),j=a(11),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log("e",e.target.name);var t=e.target,n=t.value,s=t.name;a.setState(Object(j.a)({},s,n))},a.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n=Object(h.a)(Object(h.a)(a));p.a.post("/users/register",{name:t.get("name"),username:t.get("username"),email:t.get("email"),password:t.get("password"),password2:t.get("confirm")}).then(function(e){if(console.log("response",e),e.data.hasOwnProperty("errors")){var t=function(e){var t;"password"===e?n.setState((t={displayFlashMsg:!1},Object(j.a)(t,e,""),Object(j.a)(t,"confirm",""),t)):n.setState(Object(j.a)({displayFlashMsg:!1},e,""))},a=e.data.errors,s=a.map(function(e,t){return e.msg}),o=a.map(function(e,t){return e.param}),l=1500*s.length+300;console.log(s),console.log(o);s.forEach(function(e,t){return function(a,n){setTimeout(function(){e(a)},n*t)}}(function(e){console.log(e),n.setState({displayFlashMsg:!0,msg:e})},1500)),setTimeout(function(){o.forEach(t)},l),console.log("stateafterflash",n.state)}else console.log("resdata",e.success),n.setState({displayFlashMsg:!0,msg:e.data.success}),setTimeout(function(){n.setState({displayFlashMsg:!1,msg:"",toLogin:!0})},1800)})},a.textInput=s.a.createRef(),a.state={name:"",username:"",email:"",password:"",confirm:"",displayFlashMsg:!1,msg:"hi",toLogin:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"render",value:function(){if(console.log("rendering Register"),!0===this.state.toLogin)return s.a.createElement(O.a,{to:"/login"});var e={margin:"1vw"};return s.a.createElement("div",{className:"slideIn"},s.a.createElement("div",{style:{display:"inline",textAlign:"left",marginLeft:"4.8vw"}},s.a.createElement("h2",null,"To-Do Sign Up")),s.a.createElement("h5",{className:"Registration Successful"===this.state.msg?"displayFlashSuccess":this.state.displayFlashMsg?"displayFlash":"hideFlash"},this.state.msg),s.a.createElement("form",{style:{textAlign:"center"},onSubmit:this.handleSubmit},s.a.createElement("input",{ref:this.textInput,style:e,placeholder:"name",id:"name",onChange:this.handleChange,value:this.state.name,name:"name",type:"text"}),s.a.createElement("input",{style:e,placeholder:"email",id:"email",onChange:this.handleChange,value:this.state.email,name:"email",type:"text"}),s.a.createElement("input",{style:e,placeholder:"username",id:"username",onChange:this.handleChange,value:this.state.username,name:"username",type:"text"}),s.a.createElement("input",{style:e,placeholder:"password ",id:"password",onChange:this.handleChange,value:this.state.password,name:"password",type:"password"}),s.a.createElement("input",{style:e,placeholder:"confirm password",id:"password2",onChange:this.handleChange,value:this.state.confirm,name:"confirm",type:"password"}),s.a.createElement("div",{style:{textAlign:"left",marginLeft:"4vw"}},s.a.createElement("button",{type:"submit"},"Submit"))))}}]),t}(s.a.Component),D=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleInUser=function(){a.cursorInUser?a.setState({cursorInUser:!1}):a.cursorInUser&&a.setState({cursorInUser:!0})},a.handleChange=function(e){console.log("e",e.target.name);var t,n,s=e.target,o=s.value,l=s.name;"username"===e.target.name?a.setState((t={},Object(j.a)(t,l,o),Object(j.a)(t,"cursorInUser",!0),t)):a.setState((n={},Object(j.a)(n,l,o),Object(j.a)(n,"cursorInUser",!1),n))},a.handleSubmit=function(e){e.preventDefault();var t=new FormData(e.target),n=Object(h.a)(Object(h.a)(a));p.a.post("/users/login",{username:t.get("username"),password:t.get("password")}).then(function(e){console.log("completeRes",e.data),e.data.username?(console.log("fullresponse",e),console.log("response",e.data.username),n.setState({sessionUserName:e.data.username}),n.setState({toHome:!0})):n.setState({msg:e.data,displayFlashMsg:!0});var t=e.data;console.log("errorMsg",t),"Missing credentials"===t||"No user found"===t?setTimeout(function(){n.setState({displayFlashMsg:!1,msg:"",username:"",password:"",cursorInUser:!0})},1500):setTimeout(function(){n.setState({displayFlashMsg:!1,msg:"",password:"",cursorInUser:!1})},1500)})},a.loginInput=s.a.createRef(),a.passwordInput=s.a.createRef(),a.state={username:"",password:"",toHome:!1,sessionUserName:"",displayFlashMsg:!1,msg:"",cursorInUser:!0},p.a.defaults.withCredentials=!0,a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log("componentDidMount Login");var e=this.loginInput.current;console.log("focus",e),e&&(console.log("doing focus"),this.loginInput.current.focus())}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate Login");var e=this.loginInput.current,t=this.passwordInput.current;(e||t)&&(this.state.cursorInUser?this.loginInput.current.focus():this.passwordInput.current.focus())}},{key:"render",value:function(){if(!0===this.state.toHome)return this.props.setUserState(!0),s.a.createElement(O.a,{to:{pathname:"/Todo",state:{username:this.state.sessionUserName}}});console.log("rendering Login");var e={margin:"1vw"};return s.a.createElement("div",{className:"slideIn"},s.a.createElement("h2",{style:{textAlign:"left",marginLeft:"4.8vw",display:"inline"}},"To-Do Login"),s.a.createElement("h5",{className:this.state.displayFlashMsg?"displayFlash":"hideFlash"},this.state.msg),s.a.createElement("form",{style:{textAlign:"center"},onSubmit:this.handleSubmit},s.a.createElement("input",{ref:this.loginInput,style:e,placeholder:"username",id:"username",onClick:this.toggleInUser,onChange:this.handleChange,value:this.state.username,name:"username",type:"text"}),s.a.createElement("input",{ref:this.passwordInput,style:e,placeholder:"password ",id:"password",onClick:this.toggleInUser,onChange:this.handleChange,value:this.state.password,name:"password",type:"password"}),s.a.createElement("div",{style:{textAlign:"left",marginLeft:"4vw"}},s.a.createElement("button",{type:"submit"},"Submit"))))}}]),t}(s.a.Component),I=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).getAccountProfile=function(){console.log("in getAccountProfile")},e.handleLogout=function(){p.a.post("/users/logout").then(function(t){t.data&&(console.log("redirectobj",t.data.redirect),e.setState({logoutPath:"/"}))}).catch(function(e){return console.log(e)})},e.handleClick=function(t){t.preventDefault(),console.log("in handleDelete"),e.props.setShowModalDeleteState(!0)},e.state={showMenu:!1,logoutPath:""},e.showMenu=e.showMenu.bind(Object(h.a)(Object(h.a)(e))),e.closeMenu=e.closeMenu.bind(Object(h.a)(Object(h.a)(e))),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"showMenu",value:function(e){var t=this;console.log("inshowMenu"),e.preventDefault(),this.setState({showMenu:!0},function(){document.addEventListener("click",t.closeMenu)})}},{key:"closeMenu",value:function(e){var t=this;console.log("incloseMenu"),this.setState({showMenu:!1},function(){document.removeEventListener("click",t.closeMenu)})}},{key:"render",value:function(){var e=this;if(console.log("rendering DropDown"),"/"===this.state.logoutPath)return this.setState({logoutPath:""}),this.props.setUserState(!1),this.props.setUrlState("/"),s.a.createElement(O.a,{to:{pathname:"/"}});var t={display:"block",fontSize:"calc(5px + (3 + 8) * ((100vw - 300px) / (1600 - 300)))"};return s.a.createElement("div",null,s.a.createElement("div",{className:"dropDownButton",onClick:this.showMenu},"Account"),this.state.showMenu?s.a.createElement("div",{className:"menuWrapper"},s.a.createElement("ul",{className:"dropDownMenu",ref:function(t){e.dropdownMenu=t}},s.a.createElement(S.b,{style:{textDecoration:"none"},to:"/profile"},s.a.createElement("button",{onClick:this.closeMenu,style:t},"Profile")," "),s.a.createElement(S.b,{style:{textDecoration:"none"},to:"/passwordChange"},s.a.createElement("button",{onClick:this.closeMenu,style:t},"Change Password")," "),s.a.createElement("button",{onClick:this.handleClick,style:t}," Delete Account"),s.a.createElement("button",{onClick:this.handleLogout,style:t},"Logout"))):null)}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).modalUpdate=function(e){a.setState({action:e.target.value})},a.modalDeleteUpdate=function(){console.log("im in modalDeleteUpdate"),a.props.setShowModalDeleteState(!1)},a.deleteUserAccount=function(e,t){console.log("in deleteUserAccount"),console.log("userID",e),p.a.delete("/api/deleteAccount/".concat(e)).then(function(e){console.log("deleteAccountResponse",e),console.log("res.data.status",e.status),console.log("res.data.success",e.data.success),200===e.status?(console.log("resdfsdfsdf"),a.setState({flash:e.data.success,action:""}),a.resetAll(t)):console.log("error")})},a.resetAll=function(e){setTimeout(a.modalDeleteUpdate,1500),setTimeout(function(){a.setState({redirect:e,flash:""})},1501)},a.tryAgain=function(){console.log("in tryAgain"),a.setState({action:"",flash:""})},a.authPassword=function(e){var t=Object(h.a)(Object(h.a)(a));e.preventDefault();var n=new FormData(e.target);console.log("in authPassword"),console.log("authPassword Data",n.get("password")),p.a.post("/users/delete",{password:n.get("password")}).then(function(e){e.data.passwordVerification?(console.log("response",e.data.passwordVerification),console.log("responseid",e.data.userId),a.handleLogout(e.data.userId)):(a.setState({flash:"Password Incorrect"}),setTimeout(function(){t.tryAgain()},1500))}).catch(function(e){return console.log(e)})},a.handleLogout=function(e){p.a.post("/users/logout").then(function(t){t.data&&(console.log("redirectobj",t.data.redirect),a.deleteUserAccount(e,t.data.redirect))}).catch(function(e){return console.log(e)})},a.textInput=s.a.createRef(),a.state={action:"",flash:"",redirect:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){""===this.state.redirect&&this.textInput.current.focus()}},{key:"render",value:function(){console.log("rendering ModalDelete");var e={margin:"0 0 0 2px",backgroundColor:"#7f5a83",width:"6vw"};return"/"===this.state.redirect?(console.log("REDIRECTING"),this.setState({redirect:""}),this.props.setUserState(!1),this.props.setUrlState("/"),s.a.createElement(O.a,{to:{pathname:"/"}})):s.a.createElement("form",{className:this.props.showModalDelete?"showModalDelete":"hideModalDelete",onSubmit:this.authPassword},s.a.createElement("p",{style:{color:"green"}},this.state.flash),s.a.createElement("input",{className:"modalDeleteInput",onChange:this.modalUpdate,value:this.state.action,type:"password",name:"password",placeholder:"Enter Password",ref:this.textInput}),s.a.createElement("button",{style:e},"Submit"),s.a.createElement("button",{style:e,type:"button",onClick:this.modalDeleteUpdate},"Cancel"))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setUrlState=function(e){a.setState({url:e})},a.setShowModalDeleteState=function(e){a.setState({showModalDelete:e})},a.handleClick=function(e,t){a.setState({url:e})},a.state={url:"/",showModalDelete:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("rendering Navbar"),s.a.createElement("div",{className:"navbar"},s.a.createElement("h1",null,"Todo App"),s.a.createElement("div",{className:"navLinksWrapper"},s.a.createElement(S.b,{to:"/",style:{textDecoration:"none"}},s.a.createElement("div",{onClick:function(){return e.handleClick("/")},className:"navItems"},"Home")),"/"===this.state.url&&!1===this.props.userAuthState.loggedIn?s.a.createElement(S.b,{to:"/register",style:{textDecoration:"none"}},s.a.createElement("div",{onClick:function(){return e.handleClick("/register")},className:"navItems"},"SignUp")):null,"/"===this.state.url&&!1===this.props.userAuthState.loggedIn?s.a.createElement(S.b,{to:"/login",style:{textDecoration:"none"}}," ",s.a.createElement("div",{onClick:function(){return e.handleClick("/login")},className:"navItems"},"Login")):null,this.props.userAuthState.loggedIn?s.a.createElement("span",null,s.a.createElement(I,{setShowModalDeleteState:this.setShowModalDeleteState,userLoggedIn:this.props.userAuthState.loggedIn,setUserState:this.props.setUserState,setUrlState:this.setUrlState})):null),s.a.createElement(M,{setUserState:this.props.setUserState,setUrlState:this.setUrlState,setShowModalDeleteState:this.setShowModalDeleteState,showModalDelete:this.state.showModalDelete}))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("rendering Dashboard"),s.a.createElement("div",{className:"dashboardTitle"},s.a.createElement("h1",null,"The Obligatory ToDo App"),s.a.createElement("h4",null,"Todo Together"))}}]),t}(s.a.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).populateProfileFields=function(){console.log("in populateProfileFields"),p.a.get("/users/profile").then(function(e){e.data?(console.log("resdata",e),a.setState({id:e.data._id,name:e.data.name,email:e.data.email,username:e.data.username})):console.log("nothing")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){console.log("e",e.target.name);var t=e.target,n=t.value,s=t.name;a.setState(Object(j.a)({},s,n))},a.handleSubmit=function(e){e.preventDefault(),console.log("im in handle save"),p.a.put("/users/profile/".concat(a.state.id,"/").concat(a.state.name,"/").concat(a.state.email,"/").concat(a.state.username)).then(function(e){e&&(console.log("send Profile resdata",e),a.setState({userUpdated:!0}))}).catch(function(e){return console.log(e)})},a.goBack=function(e){e.preventDefault(),a.props.history.goBack()},a.textInput=s.a.createRef(),a.state={id:"",name:"",email:"",username:"",password:"",confirm:"",userUpdated:!1,sessionUserName:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus(),this.populateProfileFields()}},{key:"render",value:function(){if(console.log("rendering Profile"),this.state.userUpdated)return s.a.createElement(O.a,{to:{pathname:"/Todo",state:{username:this.state.username}}});var e={margin:"1vw auto"},t={textAlign:"left",fontSize:"1.5vw",marginLeft:"4.8vw"};return s.a.createElement("div",null,s.a.createElement("h2",{style:{display:"inline",textAlign:"left",marginLeft:"4.8vw"}},"Account Profile"),s.a.createElement("h5",{className:"Registration Successful"===this.state.msg?"displayFlashSuccess":this.state.displayFlashMsg?"displayFlash":"hideFlash"},this.state.msg),s.a.createElement("form",{style:{textAlign:"center"},onSubmit:this.handleSubmit},s.a.createElement("label",{for:"name",style:t},"Name:"),s.a.createElement("input",{ref:this.textInput,id:"name",style:e,placeholder:"name",onChange:this.handleChange,value:this.state.name,name:"name",type:"text"}),s.a.createElement("label",{for:"email",style:t},"Email:"),s.a.createElement("input",{style:e,id:"email",placeholder:"email",onChange:this.handleChange,value:this.state.email,name:"email",type:"text"}),s.a.createElement("label",{for:"username",style:t},"Username:"),s.a.createElement("input",{style:e,id:"username",placeholder:"username",onChange:this.handleChange,value:this.state.username,name:"username",type:"text"}),s.a.createElement("div",{style:{padding:"0",textAlign:"left",marginLeft:"4vw"}},s.a.createElement("button",{type:"submit"},"Save"),s.a.createElement("button",{onClick:this.goBack},"Cancel"))))}}]),t}(s.a.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("rendering Footer");var e=(new Date).getFullYear();return s.a.createElement("div",null,s.a.createElement("footer",{className:"footer"},s.a.createElement("p",{style:{margin:".5vw"}},"Obligatory Todo App  ",s.a.createElement("a",{href:"https://terryjreynolds.github.io",target:"_blank",rel:"noopener noreferrer",style:{color:"#7f5a83",margin:".2vw"}},"  Terry Reynolds "),", ",e," ","\xa9")))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){console.log("e",e.target.name);var t=e.target,n=t.value,s=t.name;a.setState(Object(j.a)({},s,n))},a.tryAgain=function(){console.log("in tryAgain"),a.setState({flash:"",displayFlash:!1,oldPassword:""})},a.verifyCurrentPassword=function(e){e.preventDefault(),console.log("in verifyCurrentPassword");var t=Object(h.a)(Object(h.a)(a));e.preventDefault();var n=new FormData(e.target);console.log("verifyCurrentPassword Data",n.get("oldPassword")),p.a.post("/users/authOldPassword",{password:n.get("oldPassword")}).then(function(e){e.data.passwordVerification?(console.log("response",e.data.passwordVerification),console.log("responseid",e.data.userId),t.setState({passwordVerified:!0,id:e.data.userId})):(t.setState({flash:"Old password incorrect",displayFlash:!0}),setTimeout(function(){t.tryAgain()},1500))}).catch(function(e){return console.log(e)})},a.changePassword=function(e){e.preventDefault(),console.log("in changePassword");var t=Object(h.a)(Object(h.a)(a)),n=new FormData(e.target);console.log("im in handle change password submit"),p.a.put("/users/validateNewPassword",{newPassword:n.get("newPassword"),password2:n.get("confirm")}).then(function(e){if(e.data.hasOwnProperty("errors")){var a=function(e){var a;"newPassword"===e?t.setState((a={displayFlash:!1},Object(j.a)(a,e,""),Object(j.a)(a,"confirm",""),a)):t.setState(Object(j.a)({displayFlash:!1},e,""))},n=e.data.errors,s=n.map(function(e,t){return e.msg}),o=n.map(function(e,t){return e.param}),l=1500*s.length+300;console.log(s),console.log(o);s.forEach(function(e,t){return function(a,n){setTimeout(function(){e(a)},n*t)}}(function(e){console.log(e),t.setState({displayFlash:!0,msg:e})},1500)),setTimeout(function(){o.forEach(a)},l),console.log("stateafterflash",t.state)}else console.log("resdata",e.success),t.setState({displayFlash:!0,msg:e.data.success,flashColor:"green"}),setTimeout(function(){t.setState({displayFlash:!1,msg:"",toLogin:!0,userUpdated:!0,flashColor:""})},3e3)})},a.goBack=function(e){e.preventDefault(),a.props.history.goBack()},a.textInput=s.a.createRef(),a.textInputTwo=s.a.createRef(),a.state={id:"",name:"",email:"",username:"",password:"",confirm:"",userUpdated:!1,sessionUserName:"",showInputFields:!1,passwordVerified:!1,newPassword:"",displayFlash:!1,flash:"",msg:"hi",flashColor:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.textInput.current.focus()}},{key:"componentDidUpdate",value:function(){this.state.oldPassword||this.state.passwordVerified||this.textInput.current.focus(),this.state.passwordVerified&&!this.state.newPassword&&this.textInputTwo.current.focus()}},{key:"render",value:function(){if(console.log("rendering passwordChange"),this.state.userUpdated)return this.setState({userUpdated:!1,passwordVerified:!1}),s.a.createElement(O.a,{to:"/login"});var e={margin:"1vw auto"};return s.a.createElement("div",{className:"slideIn"},s.a.createElement("h2",{style:{display:"inline",textAlign:"left",marginLeft:"4.8vw"}},this.state.passwordVerified?"New Password":"Verify Old Password"),s.a.createElement("h5",{className:this.state.displayFlash&&"green"===this.state.flashColor?"displayFlashSuccess":this.state.displayFlash?"displayFlash":"hideFlash"},this.state.passwordVerified?this.state.msg:this.state.flash),s.a.createElement("form",{onSubmit:this.state.passwordVerified?this.changePassword:this.verifyCurrentPassword},s.a.createElement("input",{className:this.state.passwordVerified?"hideModal":"showModal",ref:this.textInput,style:e,placeholder:"Enter Old Password",id:"name",onChange:this.handleChange,value:this.state.oldPassword,name:"oldPassword",type:"password"}),s.a.createElement("input",{className:this.state.passwordVerified?"showModal":"hideModal",ref:this.textInputTwo,style:e,placeholder:"New password ",id:"password",onChange:this.handleChange,value:this.state.newPassword,name:"newPassword",type:"password"}),s.a.createElement("input",{className:this.state.passwordVerified?"showModal":"hideModal",style:e,placeholder:"Confirm new password",id:"password2",onChange:this.handleChange,value:this.state.confirm,name:"confirm",type:"password"}),s.a.createElement("div",{style:{padding:"0",marginLeft:"4vw"}},s.a.createElement("button",{type:"submit"},"Submit"),s.a.createElement("button",{onClick:this.goBack},"Cancel"))))}}]),t}(s.a.Component),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={loggedIn:!1},a.setUserState=a.setUserState.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"setUserState",value:function(e){this.setState({loggedIn:e})}},{key:"render",value:function(){var e=this;return console.log("rendering Appjs"),s.a.createElement(S.a,null,s.a.createElement(k,{userAuthState:this.state,setUserState:this.setUserState}),s.a.createElement("div",{className:"App"},s.a.createElement(O.d,null,s.a.createElement(O.b,{exact:!0,path:"/",component:U}),s.a.createElement(O.b,{path:"/Todo",component:E}),s.a.createElement(O.b,{path:"/register",component:C}),s.a.createElement(O.b,{path:"/login",render:function(t){return s.a.createElement(D,Object.assign({},t,{setUserState:e.setUserState,userAuthState:e.state.loggedIn}))}}),s.a.createElement(O.b,{path:"/profile",component:F}),s.a.createElement(O.b,{path:"/passwordChange",component:T})),s.a.createElement(x,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.bd936234.chunk.js.map