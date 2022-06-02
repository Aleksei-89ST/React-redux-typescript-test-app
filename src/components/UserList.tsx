import React from 'react'
import { useSelector } from 'react-redux'
import { useTypesSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {
    //данные из состояния мы вынимаем при помощи хука useSelector
    const {error,loading,users} = useTypesSelector(state => state.user)
  return (
    <div>UserList</div>
  )
}

export default UserList;