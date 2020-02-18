let id = 0;

export const ADD = text => {
  return {
    type: "ADD",
    text,
    id: id++
  };
};
export const UPDATE = id => {
  return{
    type: 'UPDATE',
    id
  }
}

export const setBtn = detail =>{
  return{
    type: 'SET_DETAIL',
    detail
  }
}