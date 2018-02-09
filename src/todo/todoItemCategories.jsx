import React from 'react'
import { connect } from 'react-redux'

const TodoItemCategories = props => {

  const showItemsCategories = () => {
    let item = props.itemsCategory || {}
    console.log(item);

    return <li className='item-categorie' key={item.id}>
        <a href={item.url}> 
          <figure>
            <img src={item.icon_url} />          
            <figcaption>
              {item.value}
            </figcaption>
          </figure>      
        </a>
      </li>   
  }

  return(
    <div className='wrapper-content-item-categorie'>
      <ul className='list-item-categorie'>
        {showItemsCategories()}
      </ul>
    </div>
    
  )
}


const mapSteteToProps = state => ({itemsCategory: state.todo.itemCategory})

export default connect(mapSteteToProps)(TodoItemCategories) 