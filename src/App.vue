<template>
  <div id="app" class="container">
    <h1 class="text-center">ToDo App</h1>
    <input 
      v-model="todoText"
      type="text" 
      class="w-100 p-2" 
      placeholder="Type todo"
      @keyup.enter="addTodo"
    >
    <hr>
    <todo 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
  </div>
</template>

<script>
import todo from '@/components/todo.vue'
export default {
  components:{
    todo
  },
  data(){
    return{
      todoText:'',
      todos:[
        {id:1, text:'buy a car', checked:false},
        {id:2, text:'play game', checked:false},
      ]
    }
  },
  methods:{
    deleteTodo(id){
      // const index = this.todos.findIndex(todo=>{
      //   return todo.id === id;
      // });
      // this.todos.splice(index,1);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(e){
      this.todos.push({
        id:Math.random,
        text:e.target.value,
        checked:false,
      });
      this.todoText='';
    },
    toggleCheckbox({id,checked}){
      const index = this.todos.findIndex(todo=>{
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    },
  }
}
</script>

<style>

</style>
