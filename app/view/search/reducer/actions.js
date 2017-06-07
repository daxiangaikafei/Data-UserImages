import * as HTTPUtil from '../../../components/fetch'
import * as ActionType from './actionType'

let receiveData = data => ({
    type: ActionType.UPDATE_SEARCH_MENU_LIST,
    data: data
})

export const clearCalculateResult = () => dispatch => {
    dispatch({type: ActionType.CLEAR_CALCULATE_RESULT})
}

//加载数据
export const getSearchMenu = () => dispatch => {
    let url = "/search/list.do";
    dispatch(HTTPUtil.fetchGet(url, null, null)).then(data=>dispatch(receiveData(data)))
}

/**改变选择框中的值 */
export const changeFilterMenuSelect = (id, index, value) => dispatch => {
    dispatch({
        type: ActionType.SEARCH_MENU_CHANGE_SELECT,
        data: {
            id: id,
            index: index,
            value: value
        }
    })
}

/**改变展示项目状态*/
export const changeShowMenuList = id => dispatch =>{
    dispatch({
        type: ActionType.CHANGE_SHOW_MENU_LIST,
        data: id
    })
}

let getValueById = (list, id) => {
    let result = []
    for(let i=0; i<list.length; i++){
        let menu = list[i]
        for(let j = 0; j<menu.list.length; j++){
            let item = menu.list[j]
            if(item.id == id && item.defaultValue.toString() != ""){
                result.push(item.defaultValue)
            }
        }
    }
    return result
}

let getShowList = state => {
    let showList = state.searchList.menuData, result = []
    for(let i=0; i<showList.length; i++){
        let menu = showList[i]
        for(let j=0; j<menu.list.length; j++){
            let item = menu.list[j]
            if(item.isShow){
                result.push(item.id)
            }
        }
    }
    return result.join(",")
}

let getFilterList = state => {
    let filterList = state.searchList.filterMenuList, showList = state.searchList.menuData, result=[]
    for(let i=0; i<showList.length; i++){
        let menu = showList[i]
        for(let j=0; j<menu.list.length; j++){
            let item = menu.list[j]
            result.push({
                code: item.code,
                value: getValueById(filterList, item.id).join(",")
            })
        }
    }
    return result
}

let receiveReportData = data => ({
    type: ActionType.SEARCH_UPDATE_REPORT_DATA,
    data: {
        ...data,
        reports: data.reports.map(item=>({
            ...item,
            data: item.data.map(obj=>({name:obj.name, value: obj.count}))
        }))
    },
})

export const clearReportData = () => dispatch => {
    dispatch({type: ActionType.SEARCH_MENU_CLEAR_REPORT_DATA})
}

/**根据筛选条件获取报表 */
export const getReportData = (opt) => (dispatch, getState) => {
    let state = getState()
    let url = "/search/calculation.do";
    opt = {
        ...opt,
        showList: getShowList(state),
        selectList: getFilterList(state)
    }

    return new Promise((reslove, reject)=>{
        dispatch(HTTPUtil.fetchPost(url, opt)).then(data=>{
            data = {
                ...data,
                id: data.id || "",
                create_date: data.create_date || "",
                number: data.number || 0,
                reports: data.reports || [],
                count: data.count || 0
            }
            dispatch(receiveReportData(data))
            if(data.reports.length > 0) {
                reslove&&reslove()
            }else{
                reject&&reject()
            }
        }, reject)
    })
}

/**添加筛选条件 */
export const addFliterMenuList = id => dispatch =>{
    dispatch({
        type: ActionType.ADD_FILTER_MENU_LIST,
        data: id
    })
}

/**关闭筛选条件结果 */
export const onCloseFilter = (id, index) => dispatch => {
    dispatch({
        type: ActionType.CLOSE_FILTER_MENU_LIST,
        data: {id: id, index: index}
    })
}

/**收藏筛选结果 */
export const collectionFavrite = opt => dispatch => {
    let url = '/search/collection.do'
    return dispatch(HTTPUtil.fetchPost(url, opt, null))
}

let receiveCityCode = data => ({
    type: ActionType.INIT_CITY_CODE,
    data: {
        cityCode3: getCityCode3(data),
        cityCode2: getCityCode2(data)
    }
})

let getCityCode3 = data => {
    return data.province.map(p => {
        let childrens = data.city.filter(c => c.code.substring(0,2) == p.code.substring(0, 2))
        return {
            value: p.code,
            label: p.name,
            children: childrens.map(child => {
                let aChildrens = data.area.filter(a => a.code.substring(0, 4) == child.code.substring(0, 4))
                return {
                    value: child.code,
                    label: child.name,
                    children: aChildrens.map(aChild => ({
                        value: aChild.code,
                        label: aChild.name
                    }))
                }
            })
        }
    })
}

let getCityCode2 = data => {
    return data.province.map(p => {
        let childrens = data.city.filter(c => c.code.substring(0,2) == p.code.substring(0, 2))
        return {
            value: p.code,
            label: p.name,
            children: childrens.map(child => {
                let aChildrens = data.area.filter(a => a.code.substring(0, 4) == child.code.substring(0, 4))
                return {
                    value: child.code,
                    label: child.name,
                }
            })
        }
    })
}

export const getCityCode = () => (dispatch, getState) => {
    let state = getState()
    if(state.loginReducer.cityCode == null){
        let url = '/index/cityCode.do'
        dispatch(HTTPUtil.fetchGet(url, null, null)).then(data=>dispatch(receiveCityCode(data)))
    }
}