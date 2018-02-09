import React from 'react'
import { connect } from 'react-redux'

const TodoItemCategories = props => {

  const showItemsCategories = () => {
    let item = props.itemsCategory || {}
    console.log(item);

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
  return(
    <div className='wrapper-content-item-categorie'>      
      {showItemsCategories()}      
    </div>    
  )
}


const mapSteteToProps = state => ({itemsCategory: state.todo.itemCategory})

export default connect(mapSteteToProps)(TodoItemCategories) 