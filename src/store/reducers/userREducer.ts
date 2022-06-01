// тут будет происходить взаимодействие со списком пользователей нашего приложение


interface UserState {
    users: any[];
    loading:boolean;
    error: null | string;
}
enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
interface fetchUsersAction {
    type:UserActionTypes.FETCH_USERS
}
interface fetchUsersSuccessAction {
    type:UserActionTypes.FETCH_USERS_SUCCESS
    payload: any[]
}
interface fetchUsersErrorAction {
    type:UserActionTypes.FETCH_USERS_ERROR;
    payload:string
}


const initialState : UserState= {
    users:[],
    loading:false,
    error:null
}

export const userReducer = (state = initialState,action:userAction):UserState => {
switch (action.type) {
case UserActionTypes.FETCH_USERS:
    return {loading:true, error:null, users:[]}
    case UserActionTypes.FETCH_USERS_SUCCESS:
    return {loading:false, error:null, users:action.payload}
    case UserActionTypes.FETCH_USERS_ERROR:
    return {loading:false, error:action.payload, users:[]}
    default:
        return state
}
} 