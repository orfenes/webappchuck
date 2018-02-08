import React, { Component } from 'react'
import Header from '../template/header'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <main>
        <Header />
        <TodoForm />
        <TodoList />
      </main>
    )
  }
}

export default App