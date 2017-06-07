import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Modal } from 'antd'

import SelectResultContainer  from './selectResult'
import SelectContainer from './selectContainer'
import AntVContainer from './antVContainer'
import FavoriteContainer from './favoritePop'

import * as RouterConst from '../../static/const'
import ErrorMessage from '../../static/const/errorMessage'
import { getCityCode, getReportData, clearCalculateResult } from './reducer/actions'

import './index.scss'

class SearchList extends React.Component {

    constructor(props,context) {
        super(props,context)

        this.props.clearCalculateResult()
        this.state = {
            isShowFavorite: false,
            btnFavoriteStatus: true,

            pageSize: 10,
            currentPage: 1,
        }
    }
    
    componentDidMount(){
        this.props.getCityCode()
        this.setState({
            isShowFavorite: false,
            btnFavoriteStatus: true,
            currentPage: 1,
        })
    }

    onGetReportData(p){
        let currentPage = p || 1
        let opt = {page: currentPage - 1 ,size: this.state.pageSize}
        this.props.getReportData(opt).then(
            ()=>this.setState({btnFavoriteStatus: false, currentPage: currentPage}),
            ()=>Modal.error({
                title: "提示",
                content: ErrorMessage.Error_Reports_Empty
            })
        )
    }

    onShowFavorite = () => {
        this.setState({isShowFavorite: true})
    }

    onCloseFavorite = () => {
        this.setState({isShowFavorite: false})
    }

    onChangeBtnFavoriteStatus = val => {
        this.setState({btnFavoriteStatus: val})
    }

    render(){
        return (
            <div className="search-container">
                <div className="search-title">
                    <span>筛选条件</span>
                    <Link to={RouterConst.ROUTER_FAVORITE}>查看收藏用户群</Link>
                </div>
                
                <SelectResultContainer />
                <SelectContainer onShowFavorite={()=>this.onShowFavorite()} btnFavoriteStatus={this.state.btnFavoriteStatus} getReportData={(p)=>this.onGetReportData(p)}/>
                <AntVContainer pageSize={this.state.pageSize} currentPage={this.state.currentPage} getReportData={(p)=>this.onGetReportData(p)} />
                {this.state.isShowFavorite ? <FavoriteContainer onCloseHandler={()=>this.onCloseFavorite()}/> : ""}
            </div>
        )
    }
}

SearchList.PropTypes = {
    menuData: PropTypes.array.isRequired,
}

let mapStateToProps = state => ({
    menuData: state.searchList.menuData
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCityCode, getReportData, clearCalculateResult }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)