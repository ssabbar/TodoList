<template>
  <div >
    <div class="text-center mb-2">
        <label for="new-todo-input">What needs to be done ?</label>
    </div>
    <div class=" mb-3">
      <input class="form-control" id="new-todo-input" v-model="taskName"/>
    </div>
    <div>
      <button class="btn btn-dark form-control" @click="addTask(taskName)" id="addTaskbutton">Add</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TaskInput',
  data () {
    return {
      taskName: ''
    }
  },
  methods: {
    addTask (taskName) {
      this.$store.dispatch({
        type: 'addTask',
        taskName
      })
      this.taskName = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  font-size: 1.5em;
  font-weight: bold;

}
</style>
