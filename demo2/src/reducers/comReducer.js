const doneBoolean = (state = 'ALL', action) =>{
  switch(action.type){
    case 'SET_DETAIL':
      return action.detail
    default :
    return state
  }
}

export default doneBoolean