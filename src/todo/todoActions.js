import axios from 'axios'

const URL = 'https://api.chucknorris.io/jokes'

export const showItensCategory = (category) =>{  
  return {
    type: 'SHOW_ITEMS_CATEGORY',
    payload: category
  }
}
