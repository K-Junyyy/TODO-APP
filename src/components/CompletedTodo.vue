<template>
    <span class="flex-grow-1" style="font-weight: 700;">
        Completed Todo: {{ numberOfCompletedTodo }}
    </span>
</template>

<script>
export default {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },

    computed: {
        numberOfCompletedTodo() {
            return this.todos.filter(todo => todo.checked).length;
        }
    }
}
</script>

<style>

</style>