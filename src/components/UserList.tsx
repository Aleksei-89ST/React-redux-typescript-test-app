import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypesSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";
import { UserAction } from "../types/user";

//данные из состояния мы вынимаем при помощи хука useSelector
const UserList: React.FC = () => {
  const { users, error, loading } = useTypesSelector((state) => state.user);
 const {fetchUsers} = useActions()
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1> Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} >{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;
