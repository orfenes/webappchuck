import axios from 'axios'

const URL = 'https://api.chucknorris.io/jokes'

export const showListCategories = (status) => {   
  return {
    type: 'SHOW_LIST_CATEGORIES',
    payload: status
  }
}

export const showItensCategory = (category, status) =>{      
  return [
    showListCategories(status),
    getItemsCategory(category),
    { type: 'SHOW_ITEMS_CATEGORY', payload: category}
  ]
}

export const getItemsCategory = (category) => { 
  return dispatch => {
    axios.get(`${URL}/random?category=${category}`) 
      .then(resp => dispatch({type: 'GET_ITEMS_CATEGORIES', payload: resp}))
      .then(resp => dispatch(showCard(true)))
  }
}

export const getListCategories = () =>{
  const request = axios.get(`${URL}/categories`)
  return {
    type: 'GET_CATEGORIES',
    payload: request
  }
}

export const showCard = (status) => {    
  return {
    type: 'SHOW_CARD',
    payload: status
  }
}

export const findContent = (query) => {  
  return dispatch => {
    axios.get(`${URL}/search?query=${query}`)
      .then(resp => dispatch({type: 'QUERY_DATA', payload: resp}))
  }  
}

export const changeDescriptionFind = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})
