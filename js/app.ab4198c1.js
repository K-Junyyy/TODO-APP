(function(t){function e(e){for(var n,s,r=e[0],l=e[1],i=e[2],u=0,h=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&h.push(c[s][0]),c[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);a&&a(e);while(h.length)h.shift()();return d.push.apply(d,i||[]),o()}function o(){for(var t,e=0;e<d.length;e++){for(var o=d[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==c[l]&&(n=!1)}n&&(d.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},c={app:0},d=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/TODO-APP/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var i=0;i<r.length;i++)e(r[i]);var a=l;d.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("h1",{staticClass:"text-center"},[t._v("Todo App")]),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("div",{staticClass:"mt-2"},[o("input",{attrs:{type:"checkbox"},on:{change:t.selectAll}}),o("span",{staticClass:"ml-3",staticStyle:{"font-weight":"700"}},[t._v("List")])]),o("hr",{staticClass:"mt-1"}),o("TodoList",{attrs:{todos:t.todos},on:{"toggle-checkbox":t.toggleCheckbox,"click-delete":t.deleteTodo}}),o("hr"),o("div",{staticClass:"d-flex"},[o("CompletedTodo",{attrs:{todos:t.todos}}),o("button",{staticClass:"btn btn-secondary btn-sm text-center",on:{click:t.deleteSelected}},[t._v("Delete Selected")]),o("button",{staticClass:"btn btn-secondary btn-sm text-center ml-1",on:{click:t.deleteTodoAll}},[t._v("Clear All")])],1)],1)])},d=[],s=(o("c740"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("Todo",{key:e.id,attrs:{todo:e},on:{"toggle-checkbox":t.toggleCheckbox,"click-delete":t.deleteTodo}})})),1)}),r=[],l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"mb-2 d-flex"},[o("div",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.checked},on:{change:t.toggleCheckbox}})]),o("span",{staticClass:"ml-3 flex-grow-1",class:t.todo.checked?"text-muted":"",style:t.todo.checked?"text-decoration: line-through":""},[t._v(" "+t._s(t.todo.text)+" ")]),o("button",{staticClass:"btn btn-danger btn-sm ml-1",on:{click:t.clickDelete}},[t._v("Delete")])])},i=[],a={props:{todo:{type:Object,required:!0}},methods:{toggleCheckbox:function(t){this.$emit("toggle-checkbox",{id:this.todo.id,checked:t.target.checked})},clickDelete:function(){this.$emit("click-delete",this.todo.id)}}},u=a,h=o("2877"),p=Object(h["a"])(u,l,i,!1,null,null,null),f=p.exports,g={components:{Todo:f},props:{todos:{type:Array,required:!0}},methods:{toggleCheckbox:function(t){this.$emit("toggle-checkbox",t)},deleteTodo:function(t){this.$emit("click-delete",t)}}},b=g,m=Object(h["a"])(b,s,r,!1,null,null,null),x=m.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoText,expression:"todoText"}],staticClass:"w-100 p-2",attrs:{type:"text",placeholder:"Please enter your ToDo list."},domProps:{value:t.todoText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.todoText=e.target.value)}}})},v=[],y={data:function(){return{todoText:""}},methods:{addTodo:function(t){this.$emit("add-todo",t.target.value),this.todoText=""}}},T=y,_=Object(h["a"])(T,k,v,!1,null,null,null),C=_.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"flex-grow-1",staticStyle:{"font-weight":"700"}},[t._v(" Completed Todo: "+t._s(t.numberOfCompletedTodo)+" ")])},w=[],j=(o("4de4"),{props:{todos:{type:Array,required:!0}},computed:{numberOfCompletedTodo:function(){return this.todos.filter((function(t){return t.checked})).length}}}),S=j,P=Object(h["a"])(S,O,w,!1,null,null,null),A=P.exports,$={components:{TodoList:x,AddTodo:C,CompletedTodo:A},data:function(){return{todoText:"",checked:!0,todos:[{id:1,text:"Exercise",checked:!1},{id:2,text:"Study",checked:!1},{id:3,text:"Shopping",checked:!1}]}},methods:{selectAll:function(){console.log(this.checked),console.log(this.todos);for(var t=0;t<this.todos.length;t++)this.todos[t].checked=this.checked;this.checked=!this.checked},deleteTodo:function(t){var e=this.todos.findIndex((function(e){return e.id===t}));this.todos.splice(e,1)},deleteSelected:function(){for(var t=0;t<this.todos.length;t++)this.todos[t].checked&&(this.todos.splice(t,1),t--)},deleteTodoAll:function(){this.todos.splice(0,this.todos.length)},addTodo:function(t){""!=t&&(this.todos.length>=15?alert("Too many ToDo lists.."):this.todos.push({id:Math.random(),text:t,checked:!1})),this.todoText=""},toggleCheckbox:function(t){var e=t.id,o=t.checked,n=this.todos.findIndex((function(t){return t.id===e}));this.todos[n].checked=o}}},D=$,E=(o("8e29"),Object(h["a"])(D,c,d,!1,null,"e8310ff4",null)),M=E.exports,q=o("2f62");n["a"].use(q["a"]);var L=new q["a"].Store({state:{},mutations:{},actions:{},getters:{}});n["a"].config.productionTip=!1,new n["a"]({store:L,render:function(t){return t(M)}}).$mount("#app")},"5f2a":function(t,e,o){},"8e29":function(t,e,o){"use strict";var n=o("5f2a"),c=o.n(n);c.a}});
//# sourceMappingURL=app.ab4198c1.js.map