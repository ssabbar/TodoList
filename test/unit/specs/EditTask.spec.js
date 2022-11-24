import Vue from 'vue'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import EditTask from '@/components/EditTask'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('EditTask component', () => {
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
      saveEditTask: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })

  it('renders correctly', () => {
    const wrapper = mount(EditTask, { propsData: { ...mockedPropData } })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('call store action "saveEditTask" when click on save button', async () => {
    const wrapper = mount(EditTask, {
      store,
      localVue,
      propsData: { ...mockedPropData }
    })

    wrapper.find('input').setValue('newTask')
    await wrapper.find('#saveEditButton').trigger('click')
    expect(actions.saveEditTask)
      .toHaveBeenCalledWith(
        expect.anything(),
        {
          type: 'saveEditTask',
          taskNewName: 'newTask',
          taskId: 1
        })

    expect(wrapper.emitted().updateEditedValue[0][0]).toBe(false)
  })
})
