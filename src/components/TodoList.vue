<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 mx-auto">
        <h1 class="text-center"> To-Do list</h1>
        <TaskInput/>
        <div class="col-md-10 offset-md-1 mt-2" id="taskslist">
          <h2 class="ml-auto mr-0 my-4">{{completedTaskslength}} out of {{tasks.length}} items completed</h2>
          <TaskList :tasks="tasks"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskInput from './TaskInput.vue'
export default {
  name: 'TodoList',
  components: {TaskList, TaskInput},
  computed: {
    completedTaskslength () {
      return this.$store.getters.completedTaskslength
    },
    tasks () {
      return this.$store.getters.tasks
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
