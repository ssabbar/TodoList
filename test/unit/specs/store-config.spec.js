import Vue from 'vue'
import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import storeConfig from '@/store/store-config'
import { cloneDeep } from 'lodash'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Store behaviour', () => {
  let store
  let mockedStateData

  beforeEach(() => {
    mockedStateData = {
      tasks: [
        {
          id: 1,
          name: 'Task1',
          completed: false
        },
        {
          id: 2,
          name: 'Task2',
          completed: false
        }
      ]
    }
    store = new Vuex.Store({
      ...cloneDeep(storeConfig),
      state: mockedStateData
    })
  })

  it('Add a new task when "addTask" is dispatched', async () => {
    const addStore = new Vuex.Store(cloneDeep(storeConfig))
    expect(addStore.state.tasks.length).toBe(0)
    await addStore.dispatch({ type: 'addTask', taskName: 'Task1' })
    await addStore.dispatch({ type: 'addTask', taskName: 'Task2' })
    expect(addStore.state.tasks.length).toBe(2)
    expect(addStore.state.tasks[0].name).toBe('Task1')
    expect(addStore.state.tasks[1].name).toBe('Task2')
  })

  it('check task  when "checkTask" is dispatched', async () => {
    await store.dispatch({ type: 'checkTask', taskId: 2 })
    expect(store.state.tasks[0].completed).toBe(false)
    expect(store.state.tasks[1].completed).toBe(true)
  })

  it('Edit the name of the task when "saveEditTask" is dispatched', async () => {
    await store.dispatch({ type: 'saveEditTask', taskNewName: 'Task2Edited', taskId: 2 })
    expect(store.state.tasks[0].name).toBe('Task1')
    expect(store.state.tasks[1].name).toBe('Task2Edited')
  })

  it('delete the task when "deleteTask" is dispatched', async () => {
    await store.dispatch({ type: 'deleteTask', taskId: 1 })
    expect(store.state.tasks.length).toBe(1)
    expect(store.state.tasks[0].name).toBe('Task2')
    expect(store.state.tasks[0].id).toBe(2)
  })

  it('delete the task when "deleteTask" is dispatched', async () => {
    await store.dispatch({ type: 'deleteTask', taskId: 1 })
    expect(store.state.tasks.length).toBe(1)
    expect(store.state.tasks[0].name).toBe('Task2')
    expect(store.state.tasks[0].id).toBe(2)
  })

  it('update "store.getters.tasks" when tasks is added or deleted', async () => {
    expect(store.getters.tasks.length).toBe(2)
    expect(store.getters.tasks).toBe(mockedStateData.tasks)

    mockedStateData.tasks.push({ id: 3, name: 'Task3', completed: false })
    await store.dispatch({ type: 'addTask', taskName: 'Task3' })
    expect(store.getters.tasks).toBe(mockedStateData.tasks)

    mockedStateData.tasks.splice(0, 1)
    await store.dispatch({ type: 'deleteTask', taskId: 1 })
    expect(store.getters.tasks).toBe(mockedStateData.tasks)
  })

  it('update "store.getters.completedTaskslength" when tasks is checked or unchecked', async () => {
    expect(store.getters.completedTaskslength).toBe(0)
    await store.dispatch({ type: 'checkTask', taskId: 2 })

    expect(store.getters.completedTaskslength).toBe(1)
  })
})
