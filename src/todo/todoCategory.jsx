import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showItensCategory } from './todoActions'

const TodoCategory = props => {   
  
  const renderListCategory = () => {
    let listCategories = props.categories || []

    return listCategories.map((todo, i) =>(
      <li className='item-categorier' key={i} onClick={() => props.showItensCategory(todo)}>{todo}</li>
    ))    
  }

  return(
    <ul className='wrapper-menu'>{renderListCategory()}</ul>
  )
}

const mapSteteToProps = state => ({categories: state.todo.categories})
const mapDispatchToProps = dispatch => bindActionCreators({ showItensCategory }, dispatch)

export default connect(mapSteteToProps, mapDispatchToProps)(TodoCategory)