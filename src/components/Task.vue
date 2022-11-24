<template>
  <div class="mb-4">
    <div v-if="edited">
      <EditTask
      :task="task"
      @updateEditedValue="updateEditedValue"/>
    </div>
    <div v-else :id="'taskid' + task.id">
      <div class="mb-2">
        <input type="checkbox" @click="checkTask(task.id)" v-model="task.completed"/>
        <label :id="task.id" class="checkbox-label">{{task.name}}</label>
      </div>
      <div class="row">
        <button @click="updateEditedValue(true)" type="button" id="editTaskButton" class="btn btn-outline-secondary">Edit</button>
        <button @click="deleteTask(task.id)" type="button" id="deleteTaskButton" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import EditTask from './EditTask.vue'
export default {
  name: 'Task',
  components: {EditTask},
  data () {
    return {
      edited: false
    }
  },
  props: {
    task: Object
  },
  methods: {
    checkTask (taskId) {
      this.$store.dispatch({
        type: 'checkTask',
        taskId
      })
    },
    updateEditedValue (value) {
      this.edited = value
    },
    deleteTask (taskId) {
      this.$store.dispatch({
        type: 'deleteTask',
        taskId: taskId
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=checkbox] {
  transform: scale(2);
  margin: 0.5rem;
}

.checkbox-label {
  font-size: 115%;
  color: #0b0c0c;
}

button[type=button] {
  display: inline-block;
  width: 45%;
  margin-left: 1rem;
}

</style>
