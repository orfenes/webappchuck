import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showCard } from './todoActions'

class TodoItemCategories extends Component {  
  
  constructor(props){
    super(props)    
  }  

  showItemsCategories(){
    let item = this.props.itemsCategory || {}   
    return <div className='card' key={item.id}>             
            <figure>
              <img className='card-img-top' src={item.icon_url} />          
              <figcaption className='card-body'>
                <h5 className="card-title">{item.category}</h5>
                <p className="card-text">{item.value} </p>
                <a href={item.url} className="btn btn-primary">Go somewhere</a>
              </figcaption>              
            </figure>                  
          </div>  
  }
  render(){       
    return(
      <div className={'wrapper-content-item-categorie ' + (this.props.classCard ? 'd-block': 'd-none' )}>  
        {this.showItemsCategories()}      
      </div>    
    ) 
  }
}


const mapSteteToProps = state => ({itemsCategory: state.todo.itemCategory, classCard: state.todo.classCard})

export default connect(mapSteteToProps)(TodoItemCategories) 