import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { showCard } from './todoActions'

class TodoItemCategories extends Component {  
  
  constructor(props){
    super(props)    
  }  

  showItemCategories(){
    let item = this.props.itemsCategory || {}     
    if(item.hasOwnProperty('result')){
      return item.result.map((item, i) =>(
        <div className='card' key={item.id}>             
          <figure>
            <img className='card-img-top' src={item.icon_url} />          
            <figcaption className='card-body'>
              <h5 className="card-title">{item.category}</h5>
              <p className="card-text">{item.value} </p>
              <a href={item.url} className="btn btn-primary">Go somewhere</a>
            </figcaption>              
          </figure>                  
        </div>  
      ))
    }else{
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
  }
  render(){       
    console.log(this.props.loader)
    return(
      <div className='container'>      
        <div className={"loader " + (this.props.loader ? 'd-block': 'd-none' )}></div>  
        <div className={'wrapper-content-item-categorie ' + (this.props.classCard ? 'd-block': 'd-none' )}>  
          {this.showItemCategories()}      
        </div>    
      </div>
    ) 
  }
}


const mapSteteToProps = state => ({itemsCategory: state.todo.itemCategory, classCard: state.todo.classCard, loader: state.todo.showLoader})

export default connect(mapSteteToProps)(TodoItemCategories) 