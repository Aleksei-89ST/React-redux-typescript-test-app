import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

//Возвращаем обьект который обьеденяет action-creator для пользователя и для туду 
export default {
    ...TodoActionCreators,
    ...UserActionCreators
}