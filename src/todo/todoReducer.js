const INITAL_STATE = { 
  categories: [],
  categoryActual: '',
  itemCategory: {},
  dropDown: false,
  classCard: false,
  textFind: '',
  queryString: '',
  showLoader: false
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
      return {...state, categoryActual: action.payload}
    case 'GET_ITEMS_CATEGORIES':
      return {...state, itemCategory: action.payload.data}
    case 'SHOW_LIST_CATEGORIES':
      let showItemsMenu = classWayOpen(action.payload);      
      return { ...state, dropDown: showItemsMenu}
    case 'SHOW_CARD':            
      return {... state, classCard: action.payload}
    case 'QUERY_DATA':    
      return {...state, itemCategory: action.payload.data}
    case 'DESCRIPTION_CHANGED':
      return {...state, textFind: action.payload}
    case 'TEXT_SEARCH':
      return {...state, queryString: action.payload}
    case 'SHOW_LOADER_PAGE':
      return {...state, showLoader: action.payload}
    default: 
      return state
  }
}