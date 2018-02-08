import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoCategory from '../todo/todoCategory'


class App extends Component{
  constructor(props){
    super(props)
  }

  render(){    
    return(
      <TodoCategory />
    )
  } 
}

export default App