# todo-list Project

CONTENTS OF THIS FILE
---------------------

 * Introduction
 * Components
 * Build Setup


<br/>

## INTRODUCTION

This project is a creation of a todo list using vuejs2. It contains two links in the nav bar.
The first link for the home page (initial home page of a new vuejs project), this page is kept for demonstration purposes.
The second link leads to the todo list where a user can add, complete, update or delete tasks.

The tools used to create this project are: vuejs 2, vuex, router,  bootstrap

<br/>

## Components


The todo list is composed of 5 components : 
 * TodoList: this component is the container for all other components. It contains the header of the page and the inclusion of the rest of the components. 
 * TaskInput: Allows the creation of a new task. It contains an input and an Add button
 * Tasklist: Displays the list of the tasks
 * Task: This is the representation of a task in its display form. It displays the name and the checkbox to determine if it's done. In addition of two buttons to delete the task or edit the task's name
 * EditTask: This is the representation of the task in its edition form. It is displayed when the edit button is clicked. It contains an input to edit the name and two buttons, to cancel or validate the new name. 

To avoid handling the events from the parent component to the child, A store handles the state of the application since it is accessible for all the components. It is easy to manipulate the state. 




<br/>

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```




