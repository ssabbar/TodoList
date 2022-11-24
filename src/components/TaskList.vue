<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <Task :task="task"/>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue'
export default {
  name: 'TaskList',
  components: {Task},
  props: {tasks: Array}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
