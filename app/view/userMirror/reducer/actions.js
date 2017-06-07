import * as HTTPUtil from '../../../components/fetch'
import * as ActionType from './actionType'
import { Modal } from 'antd'
import ErrorMessage from '../../../static/const/errorMessage'

let receiveData = data => ({
    type: ActionType.USER_MIRROR_UPDATE,
    data: data
})

export const getUserMirror = (username) => dispatch => {
    let url = '/search/labelList.do'
    let opt = {
        id: username
    }
    dispatch(HTTPUtil.fetchGet(url, opt, null)).then((data)=>{
        if(data.mirrorData.length > 0){
            dispatch(receiveData(data))
        } else{
            Modal.error({
                title: "提示",
                content: ErrorMessage.Error_Mirror_Empty
            })
        }
    })
}