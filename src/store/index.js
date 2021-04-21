import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false },
            { id: 2, text: 'play game', checked: false },
            { id: 3, text: 'study', checked: false },
            { id: 4, text: 'movie', checked: false },
        ],
    },
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random,
                text: value,
                checked: false,
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        addTodo({ commit }, value) {
            setTimeout(function(){
                commit('ADD_TODO', value);
            }, 100);
        },
        toggleTodo({ commit }, payload) {
            setTimeout(function(){
                commit('TOGGLE_TODO', payload);
            }, 100);
        },
        deleteTodo({ commit }, todoId) {
            setTimeout(function(){
                commit('DELETE_TODO', todoId);
            }, 100);
        },

    },
    getters: {
        numberOfcompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
});