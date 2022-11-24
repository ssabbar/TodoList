import Vue from 'vue'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import TaskInput from '@/components/TaskInput'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Task input', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addTask: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('call store action "addTask" when click on add button', async () => {
    const wrapper = mount(TaskInput, { store, localVue })
    wrapper.find('input').setValue('Task1')
    await wrapper.find('button').trigger('click')
    expect(actions.addTask).toHaveBeenCalledWith(expect.anything(), { taskName: 'Task1', type: 'addTask' })
  })

  it('renders correctly', () => {
    const wrapper = mount(TaskInput)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
