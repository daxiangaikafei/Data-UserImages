import * as HTTPUtil from '../../../components/fetch'
import * as ActionType from './actionType'

let receiveData = data => ({
    type: ActionType.USER_MIRROR_UPDATE,
    data: data
})

export const getUserMirror = (username) => dispatch => {
    let url = '/search/labelList.do'
    let opt = {
        id: username
    }
    dispatch(HTTPUtil.fetchGet(url, opt, null)).then((data)=>dispatch(receiveData(data)))
}