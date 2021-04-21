<template>
<div id="app">
  <div class="container">
    <!--ToDo App-->
    <h1 class="text-center">Todo App</h1>

    <!--ToDo List 입력-->
    <AddTodo @add-todo="addTodo"/>

    <!--전체선택 해제-->
    <div class="mt-2">
      <input type="checkbox" @change="selectAll" >
      <span class="ml-3" style="font-weight: 700;">List</span>
    </div>
    <hr class="mt-1">

    <!--ToDo 목록-->
    <TodoList 
      :todos="todos" 
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    />
    <hr>
    <div class="d-flex">
      <!--완료 목록 개수-->
      <CompletedTodo :todos="todos" />

      <!--선택 삭제-->
      <button 
        class="btn btn-secondary btn-sm text-center"
        @click="deleteSelected"
      >Delete Selected</button>

      <!--전체 삭제-->
      <button 
        class="btn btn-secondary btn-sm text-center ml-1"
        @click="deleteTodoAll"
      >Clear All</button>
    </div>
  </div>
</div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
  },
  data() {
    return {
      todoText: '',
      checked: true,
      todos: [
        { id: 1, text: 'Exercise', checked: false},
        { id: 2, text: 'Study', checked: false},
        { id: 3, text: 'Shopping', checked: false},
      ]
    }
  },

  methods: {
    selectAll() {
      console.log(this.checked);
      console.log(this.todos);
      for(var i = 0; i <  this.todos.length; i++){
        this.todos[i].checked = this.checked;
      }
      this.checked = !this.checked;
    },
    deleteTodo(id) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos.splice(index, 1);
      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    deleteSelected() {
      for(var i = 0; i <  this.todos.length; i++){
        if( this.todos[i].checked){
          this.todos.splice(i, 1);
          i--;
        }
      }
    },
    deleteTodoAll() {
      this.todos.splice(0, this.todos.length);
    },
    addTodo(value) {
      // 빈문자입력 무시
      if(value !=''){
        if(this.todos.length >= 15){
          alert('Too many ToDo lists..')
        }
        else{
            this.todos.push({
            id: Math.random(),
            text: value,
            checked: false
          });
        }
      }
      this.todoText = '';
    },
    toggleCheckbox({id, checked}) {
      const index = this.todos.findIndex(todo => {
        return todo.id === id;
      });
      this.todos[index].checked = checked;
    }
  }
}
</script>

<style scoped>
#app { 
  width: 2000px;
  height: 1200px;
  background-image: url('../images/todo_background.jpg');
  background-position: center center;
  display: table-cell;
  vertical-align: top;
}
.container{
  max-width: 700px;
  margin: 40px auto 40px auto;
  background-color: white;
}
</style>