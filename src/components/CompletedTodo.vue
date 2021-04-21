<template>
   <div>
       Completed Todo: {{numberOfcompletedTodo}}
   </div>
</template>

<script>
export default {
    computed:{
        // todos(){
        //     return this.$store.state.todos;
        // },
        numberOfcompletedTodo(){
            return this.$store.getters.numberOfcompletedTodo;
        }
    }
}
</script>

<style scoped>

</style>