<template>
  <div>
    <div>
      <p class="mb-2">Edit name for {{task.name}}</p>
      <input class="mb-3" v-model="taskNewName"/>
    </div>
    <div class="row">
      <button @click="removeEditMode()" id="cancelEditButton" class="btn btn-outline-secondary">Cancel</button>
      <button @click="saveEditTask(taskNewName)" id="saveEditButton" class="btn btn-dark">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditTask',
  data () {
    return {
      taskNewName: this.task.name
    }
  },
  props: {
    task: Object
  },
  methods: {
    removeEditMode () {
      this.$emit('updateEditedValue', false)
    },
    saveEditTask (taskNewName) {
      this.$store.dispatch({
        type: 'saveEditTask',
        taskNewName: taskNewName,
        taskId: this.task.id
      })
      this.removeEditMode()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  display: inline-block;
  width: 45%;
  margin-left: 1rem;
}

input {
  width: 100%;
}

p {
  font-size: large;
}
</style>
