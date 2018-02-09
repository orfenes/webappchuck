const INITAL_STATE = { 
  categories: ['mara', 'tereza', 'jose', 'orfenes'],
  itemCategory: {
    category: [
      'history'
    ],
    "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id": "rqcvwdgqq6amwony3nngba",
    "url": "https://api.chucknorris.io/jokes/rqcvwdgqq6amwony3nngba",
    "value": "In the Words of Julius Caesar, \"Veni, Vidi, Vici, Chuck Norris\". Translation: I came, I saw, and I was roundhouse-kicked inthe face by Chuck Norris."
  } 

}

export default function(state = INITAL_STATE, action){
  switch(action.type){
    case 'SHOW_ITEMS_CATEGORY':
      console.log('resultado')               
      return {...state, itemCategory: []}
    default:
      return state
  }
}