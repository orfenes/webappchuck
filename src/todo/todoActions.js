import axios from 'axios'

const URL = 'https://api.chucknorris.io/jokes'

export const showListCategories = (status) => {   
  return {
    type: 'SHOW_LIST_CATEGORIES',
    payload: status
  }
}

export const showItensCategory = (category, status) =>{  
  const request = axios.get(`${URL}/random?category=${category}`)   
  return {
    type: 'SHOW_ITEMS_CATEGORY',
    payload: request
  }
}

export const getListCategories = () =>{
  const request = axios.get(`${URL}/categories`)
  return {
    type: 'GET_CATEGORIES',
    payload: request
  }
}