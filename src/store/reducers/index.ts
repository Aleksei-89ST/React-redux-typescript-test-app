import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    user:userReducer,
    todo:todoReducer
})
// таким образом получаем тип нашего редусера и с помощью этого типа мы сможем сделать хук который будет работать уже стипизированным useSelector 
export type RootState = ReturnType<typeof rootReducer>