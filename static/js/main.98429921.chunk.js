(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r),o=(a(15),a(2)),l=a(3),c=a(6),d=a(4),p=a(5),m=a(1),u=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:k.header,className:"row"},s.a.createElement("div",{class:"my-task-list col-sm-12"}," ",s.a.createElement("p",null," Task List")))}}]),t}(s.a.Component),k={header:{color:"rgba(51, 0, 25, 0.90)",textAlign:"center",backgroundColor:"rgba(255, 230, 242, 0.7)",fontFamily:"Permanent Marker",padding:"0.1em",fontSize:"5em",border:"0.05em",borderStyle:"solid",borderRadius:"1em",marginTop:"50px",boxShadow:"10px 10px",textShadow:"1px 1px"}},h=u,b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{style:f.delete,type:"button",onClick:this.props.clickHandler},this.props.label," ")}}]),t}(s.a.Component),f={delete:{backgroundColor:"rgb(102, 0, 51)",color:"rgba(240, 241, 229, 0.8)",borderRadius:"1em",paddingLeft:"0.5em",paddingRight:"0.5em",fontFamily:"Permanent Marker",fontSize:"0.7em"}},v=b,g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{style:j.add,type:"button",onClick:this.props.clickHandler},this.props.label)}}]),t}(s.a.Component),j={add:{backgroundColor:"rgb(153, 115, 0)",color:"rgba(240, 241, 229, 0.8)",borderRadius:"1em",paddingLeft:"0.5em",paddingRight:"0.5em",fontFamily:"Permanent Marker",fontSize:"0.7em"}},O=g,y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).onDoneClicked=a.onDoneClicked.bind(Object(m.a)(Object(m.a)(a))),a.onDeleteClicked=a.onDeleteClicked.bind(Object(m.a)(Object(m.a)(a))),a.onRestoreClicked=a.onRestoreClicked.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onDoneClicked",value:function(){var e=this.props.taskID;this.props.onCompleteTaskHandler(e)}},{key:"onDeleteClicked",value:function(){var e=this.props.taskID;this.props.onDeleteTaskHandler(e)}},{key:"onRestoreClicked",value:function(){var e=this.props.taskID;this.props.onRestoreTaskHandler(e)}},{key:"render",value:function(){return s.a.createElement("div",{style:T.task,className:"row"},s.a.createElement("div",{className:"col-sm-1"},this.props.taskNumber),s.a.createElement("div",{className:"col-sm-4"}," ",this.props.taskDescription),s.a.createElement("div",{className:"col-sm-2"},this.props.taskDueDate),!this.props.taskCompleted&&s.a.createElement("div",{className:"col-sm-2"}," ",s.a.createElement(O,{label:"done",clickHandler:this.onDoneClicked})," "),this.props.taskCompleted&&s.a.createElement("div",{className:"col-sm-2"}," ",s.a.createElement(O,{label:"restore",clickHandler:this.onRestoreClicked})," "),!this.props.taskCompleted&&s.a.createElement("div",{className:"col-sm-2"}," ",s.a.createElement(v,{label:"delete",clickHandler:this.onDeleteClicked}),"  "),"green"===this.props.taskStatus&&!this.props.taskCompleted&&s.a.createElement("div",{className:"col-sm-1"}," ",s.a.createElement("img",{src:"assets/greenicon.png",height:"30px"}),"  "),"red"===this.props.taskStatus&&!this.props.taskCompleted&&s.a.createElement("div",{className:"col-sm-1"}," ",s.a.createElement("img",{src:"assets/redicon.png",height:"30px"}),"  "))}}]),t}(s.a.Component),T={task:{color:"rgba(51, 0, 25, 0.94)",textAlign:"center",backgroundColor:"rgba(255, 230, 242, 0.7)",fontFamily:"Cursive",padding:"0.2em",fontSize:"1.5em",opacity:"50%",border:"0.07em",borderStyle:"solid",borderRadius:"0.5em",marginBottom:"20px",fontStyle:"italic",alignItems:"center",boxShadow:"7px 7px"}},E=y,C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:D.mytasks,className:"container"},this.props.tasks.map(function(t,a){return s.a.createElement(E,{taskDescription:t.description,taskDueDate:t.dueDate,taskSortDate:"",key:a,taskNumber:a+1,taskID:t.id,taskCompleted:t.done,onDeleteTaskHandler:e.props.onDeleteTaskHandler,onCompleteTaskHandler:e.props.onCompleteTaskHandler,onRestoreTaskHandler:e.props.onRestoreTaskHandler,taskStatus:t.status})}))}}]),t}(s.a.Component),D={myTasks:{paddingBottom:"5em"}},S=C,x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:w.infobar,class:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-2"}," ",this.props.description," "),s.a.createElement("div",{className:"col-sm-1"},this.props.items.length)))}}]),t}(s.a.Component),w={infobar:{color:"rgb(240, 193, 225)",textAlign:"left",fontFamily:"Permanent Marker",fontSize:"1.7em",marginTop:"20px",marginBottom:"20px",fontWeight:"bold"}},H=x,N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).onTextFieldChange=a.onTextFieldChange.bind(Object(m.a)(Object(m.a)(a))),a.handleKeyPress=a.handleKeyPress.bind(Object(m.a)(Object(m.a)(a))),a.state={inputFieldValue:""},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onTextFieldChange",value:function(e){var t=e.target.value;this.setState({inputFieldValue:t});var a=e.target.id;this.props.changeHandler(t,a)}},{key:"handleKeyPress",value:function(e){13===e.charCode&&(this.props.onEnterPressed(),e.preventDefault())}},{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("input",{style:I.input,type:this.props.type,value:this.props.taskValue,onChange:this.onTextFieldChange,onKeyPress:this.handleKeyPress,placeholder:this.props.placeholder,id:this.props.id}))}}]),t}(s.a.Component),I={input:{color:"rgba(51, 0, 25, 0.94)",textAlign:"center",backgroundColor:"rgba(255, 230, 242, 0.7)",fontFamily:"Cursive",fontSize:"0.6em",border:"0.07em",borderStyle:"solid",borderRadius:"0.5em",fontStyle:"italic",boxShadow:"6px 6px"}},P=N,R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={taskDescription:"",dueDate:""},a.onAddClicked=a.onAddClicked.bind(Object(m.a)(Object(m.a)(a))),a.onInputfieldUpdated=a.onInputfieldUpdated.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"onAddClicked",value:function(){var e=this.state.taskDescription,t=this.state.dueDate;if(e&&t){var a=new Date;a.setHours(0,0,0,0);var n=new Date(t);if(n.setHours(0,0,0,0),a>n)alert("Please select a valid date; due date cannot be in the past");else{var s={id:Math.floor(100*Math.random()),description:e,dueDate:t,done:!1,status:""};this.props.onAddTaskHandler(s),this.setState({taskDescription:"",dueDate:""})}}else alert("Please enter task description and select due date before clicking 'add'")}},{key:"onInputfieldUpdated",value:function(e,t){"taskInput"===t?this.setState({taskDescription:e}):"dateInput"===t&&this.setState({dueDate:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",{style:A.addTask,class:"row"},s.a.createElement("div",{className:"col-sm-1"}," "),s.a.createElement("div",{className:"col-sm-2"},"Task: "),s.a.createElement("div",{className:"col-sm-5"},s.a.createElement(P,{taskValue:this.state.taskDescription,changeHandler:this.onInputfieldUpdated,onEnterPressed:this.onAddClicked,placeholder:"enter new task",type:"text",id:"taskInput"}))),s.a.createElement("div",{style:A.addTask,class:"row"},s.a.createElement("div",{className:"col-sm-1"}," "),s.a.createElement("div",{className:"col-sm-2"},"Due: "),s.a.createElement("div",{className:"col-sm-5"},s.a.createElement(P,{taskValue:this.state.dueDate,changeHandler:this.onInputfieldUpdated,onEnterPressed:this.onAddClicked,placeholder:"enter due date",type:"date",id:"dateInput"})),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement(O,{clickHandler:this.onAddClicked,label:"add"}))))}}]),t}(s.a.Component),A={addTask:{color:"rgb(240, 193, 225)",textAlign:"left",fontFamily:"Permanent Marker",fontSize:"1.7em",marginTop:"40px",marginBottom:"20px",fontWeight:"bold",alignItems:"center"}},F=R,M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={activeTasks:[],completedTasks:[]},a.addTask=a.addTask.bind(Object(m.a)(Object(m.a)(a))),a.deleteTask=a.deleteTask.bind(Object(m.a)(Object(m.a)(a))),a.completeTask=a.completeTask.bind(Object(m.a)(Object(m.a)(a))),a.restoreTask=a.restoreTask.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"addTask",value:function(e){var t=this.state.activeTasks,a=new Date;a.setHours(0,0,0,0);var n=new Date(e.dueDate),s=String(n.getFullYear())+String(n.getMonth())+String(n.getDate());e.taskSortDate=s,e.status=a>n?"red":"green",t.push(e),t.sort(function(e,t){return e.taskSortDate>t.taskSortDate?1:-1}),this.setState({activeTasks:t})}},{key:"deleteTask",value:function(e){var t=this.state.activeTasks,a=t.findIndex(function(t){return t.id===e});t.splice(a,1),this.setState({activeTasks:t})}},{key:"completeTask",value:function(e){var t=this.state.activeTasks,a=this.state.completedTasks,n=t.filter(function(t){return t.id===e})[0];n.done=!0,a.unshift(n);var s=t.findIndex(function(t){return t.id===e});t.splice(s,1),this.setState({activeTasks:t,completedTasks:a})}},{key:"restoreTask",value:function(e){var t=this.state.activeTasks,a=this.state.completedTasks,n=a.filter(function(t){return t.id===e})[0];n.done=!1,t.push(n),t.sort(function(e,t){return e.taskSortDate>t.taskSortDate?1:-1});var s=a.findIndex(function(t){return t.id===e});a.splice(s,1),this.setState({activeTasks:t,completedTasks:a})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(h,null),s.a.createElement(F,{onAddTaskHandler:this.addTask}),s.a.createElement("hr",null),s.a.createElement(H,{description:"Active Tasks",items:this.state.activeTasks}),s.a.createElement(S,{tasks:this.state.activeTasks,onDeleteTaskHandler:this.deleteTask,onCompleteTaskHandler:this.completeTask}),s.a.createElement("hr",null),s.a.createElement(H,{description:"Completed Tasks",items:this.state.completedTasks}),s.a.createElement(S,{tasks:this.state.completedTasks,onRestoreTaskHandler:this.restoreTask}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,2,1]]]);
//# sourceMappingURL=main.98429921.chunk.js.map