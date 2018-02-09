const INITAL_STATE = { 
  categories: [],
  itemCategory: {},
  dropDown: false
}

const classWayOpen = (status) => {  
  if(status){
    return false
  }else{
    return true
  }  
}

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case 'GET_CATEGORIES':
     return { ...state, categories: action.payload.data }
    case 'SHOW_ITEMS_CATEGORY':           
      return {...state, itemCategory: action.payload.data}
    case 'SHOW_LIST_CATEGORIES':
      let showItemsMenu = classWayOpen(action.payload);      
      return { ...state, dropDown: showItemsMenu}
    default:
      return state
  }
}