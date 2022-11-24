import Vue from 'vue'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Task from '@/components/Task'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Task components', () => {
  let actions
  let store

  const mockedPropData = {
    task: {
      id: 1,
      name: 'task1',
      completed: false
    }
  }

  beforeEach(() => {
    actions = {
      checkTask: jest.fn(),
      deleteTask: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('renders correctly', async () => {
    const wrapper = mount(Task, { propsData: { ...mockedPropData } })
    expect(wrapper.html()).toMatchSnapshot()

    await wrapper.setData({ edited: true })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('call store action "checkTask" when click on the checkbox of task1', async () => {
    const wrapper = mount(Task, {
      store,
      localVue,
      propsData: { ...mockedPropData }
    })

    await wrapper.find('input[type=checkbox]').trigger('click')
    expect(actions.checkTask).toHaveBeenCalledWith(expect.anything(), { type: 'checkTask', taskId: 1 })
  })

  it('call store action "deletekTask" when click on delete button of task1', async () => {
    const wrapper = mount(Task, {
      store,
      localVue,
      propsData: { ...mockedPropData }
    })

    await wrapper.find('#deleteTaskButton').trigger('click')
    expect(actions.deleteTask).toHaveBeenCalledWith(expect.anything(), { type: 'deleteTask', taskId: 1 })
  })

  it('call function updateEditedValue when click on edit button of task1', async () => {
    const wrapper = mount(Task, {
      store,
      localVue,
      propsData: { ...mockedPropData }
    })

    await wrapper.find('#editTaskButton').trigger('click')
    expect(wrapper.vm.edited).toBe(true)
  })
})
