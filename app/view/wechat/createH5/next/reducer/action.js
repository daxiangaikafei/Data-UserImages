import * as HTTPUtil from '../../../../../components/fetch'
import * as ActionTypes from './ActionTypes'
const wechatNextData = data => ({
    type : ActionTypes.WECHART_NEXT,
    data : data
})
//生成推广连接
export const generateAd = (userSelectGroupId,messageId) => dispatch => {
    let url = "/h5/sendLink.do";
    return dispatch(HTTPUtil.fetchGet(url, {"userSelectGroupId":userSelectGroupId,"messageId":messageId}, null))
}


//发送到我的手机
export const sendMessage = (data) => dispatch => {
    let url = "/message/sendMobile.do";
    dispatch(HTTPUtil.fetchGet(url, data, null)).then((data)=>data)
}