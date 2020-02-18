const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        // state原数组， 加上新增的一个对象，利用模板字符串合并
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      // 切换状态，利用map找到相应id并进行状态切换(completed)
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos