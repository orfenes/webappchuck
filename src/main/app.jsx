import 'modules/bootstrap/dist/css/bootstrap.min.css'
import '../template/custom.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoCategory from '../todo/todoCategory'
import TodoItemCategories from '../todo/todoItemCategories'


class App extends Component{
  constructor(props){
    super(props)
  }

  render(){    
    return(
      <div className='container'>
        <TodoCategory />
        <TodoItemCategories />
      </div>
    )
  } 
}

export default App