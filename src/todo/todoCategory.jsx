import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showItensCategory, getListCategories, showListCategories } from './todoActions'

class TodoCategory extends Component {   

  constructor(props){
    super(props)    
  }

  componentWillMount(){    
    this.props.getListCategories()
  }
  
  renderListCategory(){    
    let listCategories = this.props.categories || []

    return listCategories.map((todo, i) =>(      
      <a className='categorie dropdown-item' key={i} onClick={() => this.props.showItensCategory(todo, this.props.dropDown)}>{todo}</a>
    ))    
  }

  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className={"collapse navbar-collapse " + (this.props.dropDown ? 'show' : 'closed')} id="navbarSupportedContent">   
          <ul className="navbar-nav mr-auto">  
            <li className="nav-item dropdown"> 
              <a className="nav-link dropdown-toggle" href="javascript:void(0)"  onClick={() => this.props.showListCategories(this.props.dropDown)} id="navbarDropdown">
                Categorias
              </a>
              <div className={ 'dropdown-menu '  + (this.props.dropDown ? 'show' : 'closed')} aria-labelledby="navbarDropdown">
                {this.renderListCategory()}
              </div>                      
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const mapSteteToProps = state => ({categories: state.todo.categories, dropDown: state.todo.dropDown})
const mapDispatchToProps = dispatch => bindActionCreators({ showItensCategory, getListCategories, showListCategories }, dispatch)

export default connect(mapSteteToProps, mapDispatchToProps)(TodoCategory)