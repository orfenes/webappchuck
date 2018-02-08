const INITAL_STATE = { 
  categories: ['mara', 'tereza', 'jose', 'orfenes'] 
}

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case 'SHOW_ITEMS_CATEGORY':               
      return {...state, listItemCategories: []}
    default:
      return state
  }
}