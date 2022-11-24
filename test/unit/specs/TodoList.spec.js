import Vue from 'vue'
import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import TodoList from '@/components/TodoList'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TodoList component', () => {
    let getters
    let store

    beforeEach(() => {
        getters = {
            tasks: () => { return [{ id: 1, name: 'test', completed: false }] },
            completedTaskslength: () => 1
        }
        store = new Vuex.Store({
            getters
        })
    })

    it('renders correctly', () => {
        const wrapper = mount(TodoList, {
            store,
            localVue
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('display the number of tasks and done tasks correctly', async () => {
        const wrapper = mount(TodoList, {
            store,
            localVue
        })

        const expectedText = getters.completedTaskslength() + ' out of ' + getters.tasks().length + ' items completed'
        expect(wrapper.find('h2').text()).toBe(expectedText)
    })
})

// test('Add task to todo list', async () => {
//   const wrapper = mount(TodoList)

//   expect(wrapper.html()).toContain('0 out of 0 items completed')

//   // test the ADD FUNCTION
//   wrapper.find('input#new-todo-input').setValue('testInput1')
//   await wrapper.find('#addTaskbutton').trigger('click')
//   expect(wrapper.html()).toContain('0 out of 1 items completed')
//   expect(wrapper.html()).toContain('testInput1')

//   wrapper.find('input#new-todo-input').setValue('testInput2')
//   await wrapper.find('#addTaskbutton').trigger('click')
//   expect(wrapper.html()).toContain('0 out of 2 items completed')
//   expect(wrapper.html()).toContain('testInput2')

//   // test the delete FUNCTION
//   await wrapper.find('div#taskid1 button#deleteTaskButton').trigger('click')
//   expect(wrapper.html()).toContain('0 out of 1 items completed')
//   expect(wrapper.html()).not.toContain('testInput1')
//   expect(wrapper.html()).toContain('testInput2')

//   // Test the check function
//   await wrapper.find('div#taskid2 #editInput').trigger('click')
//   expect(wrapper.html()).toContain('1 out of 1 items completed')

//   // test the edit function
//   await wrapper.find('div#taskid2 #editButton').trigger('click')
//   expect(wrapper.html()).toContain('Edit name for testInput2')
//   wrapper.find('input#editInput').setValue('new value')
//   await wrapper.find('#saveEditButton').trigger('click')

//   expect(wrapper.html()).not.toContain('testInput2')
//   expect(wrapper.html()).not.toContain('Edit name for testInput2')
//   expect(wrapper.html()).toContain('new value')

//   // test the cancel of edit task
//   await wrapper.find('div#taskid2 #editButton').trigger('click')
//   expect(wrapper.html()).toContain('Edit name for new value')
//   wrapper.find('input#editInput').setValue('third value')
//   await wrapper.find('#cancelEditButton').trigger('click')

//   expect(wrapper.html()).not.toContain('third value')
//   expect(wrapper.html()).not.toContain('Edit name for third value')
//   expect(wrapper.html()).toContain('new value')
// })
