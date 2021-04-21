<template>
  <div id="app" class="container">
    <h1 class="text-center">ToDo App</h1>
    <AddTodo />
    <hr>
    <TodoList />
    <hr>
    <CompletedTodo />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';

export default {
  components:{
    TodoList,
    AddTodo,
    CompletedTodo,
  },
  data(){
    return{
      todoText:'',
      // todos:[
      //   {id:1, text:'buy a car', checked:false},
      //   {id:2, text:'play game', checked:false},
      // ]
    }
  },
  methods:{
    // deleteTodo(id){
    //   const index = this.todos.findIndex(todo=>{
    //     return todo.id === id;
    //   });
    //   this.todos.splice(index,1);
    //   this.todos = this.todos.filter(todo => todo.id !== id);
    // },
    // addTodo(value){
    //   this.todos.push({
    //     id:Math.random,
    //     text:value,
    //     checked:false,
    //   });
    //   this.todoText='';
    // },
    // toggleCheckbox({id,checked}){
    //   const index = this.todos.findIndex(todo=>{
    //     return todo.id === id;
    //   });
    //   this.todos[index].checked = checked;
    // },
  }
}
</script>

<style>

</style>
