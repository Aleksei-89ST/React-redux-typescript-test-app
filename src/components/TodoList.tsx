import React, { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypesSelector } from '../hooks/useTypedSelector'

const TodoList: React.FC = () => {
    const {error,limit,loading,page,todos} =useTypesSelector(state => state.todo)
const {fetchTodo} = useActions()
useEffect(() => {

},[])

    if (loading) {
        return <h1> Идёт загрузка...</h1>;
      }
      if (error) {
        return <h1>{error}</h1>;
      }

  return (
    <div>
        {todos.map(todo => <div key={todo.id}>{todo.id}-{todo.name}</div>)}
    </div>
  )
}

export default 