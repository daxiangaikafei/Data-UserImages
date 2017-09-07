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
   // dispatch(HTTPUtil.fetchGet(url, data, null)).then(alert(1))
    return new Promise((resolve, reject) => {
        dispatch(HTTPUtil.fetchPost(url, data, null)).then(data=>{
            Modal.success({
                title: '提示',
                content: '发送成功!'
            })
            resolve && resolve()
        }, reject)
    })
}