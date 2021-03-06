import * as HTTPUtil from '../../../../components/fetch'

//推送人群
export const getUserList = () => dispatch => {
    let url = "/portrayal/collection/allList.do";
    return dispatch(HTTPUtil.fetchGet(url, null, null))
}

//插入H5链接
export const getLinkUrl = (data) => dispatch => {
    let url = "/message/wapLink.do";
    return dispatch(HTTPUtil.fetchGet(url, data, null))
}
//发送消息
export const sendMessage = (data) => dispatch => {
    let url = "/message/sendMobile.do";
    return dispatch(HTTPUtil.fetchGet(url, data, null))
}
//确认发送手机短信
export const messageSave = (data) => dispatch => {
    let url = "/activity/save.do";
    return dispatch(HTTPUtil.fetchPost(url, data, null))
}

//确认发送手机短信
export const appSave = (data) => dispatch => {
    let url = "/qbaoMsg/save.do";
    return dispatch(HTTPUtil.fetchPost(url, data, null))
}