export default {
  state: {
    tasks: []
  },
  getters: {
    completedTaskslength (state) {
      return state.tasks.filter((task) => task.completed === true).length
    },
    tasks (state) {
      return state.tasks
    }
  },
  mutations: {
    addTask (state, payload) {
      state.tasks.push(payload)
    },
    checkTask (state, payload) {
      const task = state.tasks.find((e) => e.id === payload.taskId)
      task.completed = !task.completed
    },
    deleteTask (state, payload) {
      state.tasks = state.tasks.filter((task) => task.id !== payload.taskId)
    },
    saveEditTask (state, payload) {
      state.tasks.find((e) => e.id === payload.taskId).name = payload.taskNewName
    }
  },
  actions: {
    addTask (context, payload) {
      const newTask = { id: context.state.tasks.length + 1, name: payload.taskName, completed: false }
      context.commit('addTask', newTask)
    },
    checkTask ({ commit }, taskId) {
      commit('checkTask', taskId)
    },
    deleteTask ({ commit }, taskId) {
      commit('deleteTask', taskId)
    },
    saveEditTask ({ commit }, payload) {
      commit('saveEditTask', payload)
    }
  }
}
