import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import { Table, Button ,Icon} from 'antd'
import Icons from '../../components/icon'
import FavoriteItemInfo from './favoriteItemInfo'
import { getFavoriteData } from './reducer/actions'
import * as RouterConst from '../../static/const'


import './index.scss'

class FavoritePage extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.state = {
            rowData: null,
            columns: [
                {
                    title: '筛选时间',
                    dataIndex: 'createTime',
                    width:220,
                    // key: 'create_time',
                    className: "table-createTime"
                },
                {
                    title: '客群名称',
                    // key: 'name',
                    dataIndex: 'name',
                    render: (text, record) => (
                        <div className="table-name">{text}</div>
                    ),
                },
                {
                    title: '客群数量',
                    dataIndex: 'num',
                    className: "table-num"
                    // key: 'count',
                },
                {
                    title: '客群描述',
                    dataIndex: 'desc',
                    // key: 'desc',
                    render: (text, record) => (
                        <div className="table-desc">{text}</div>
                    ),
                },
                {
                    title: '操作',
                    className: "table-operation",
                    // key: "operation",
                    width:260,
                    render: (text, record) => (
                        <span>
                            <Button className="btn_mail" onClick={(e) => this.onMailHandler(e, record.userSelectId, record.id, record.num)}><span className="btn-icon"><Icons name="mail" color="#000" size="14" /></span>短信</Button>
                            <Button className="btn_wx" onClick={(e) => this.onWeiXinHandler(e, record.userSelectId, record.id, record.num)}><span className="btn-icon"><Icons name="weixing" color="#000" size="14" /></span>微信</Button>
                            <Button className="btn_app" onClick={(e) => this.onAppHandler(e, record.userSelectId, record.id, record.num)}><span className="btn-icon"><Icon type="apple" color="#000" size="14" style={{color:"#000"}} /></span>钱宝App</Button>
                        </span>
                    )
                }
            ]
        }
    }

    componentDidMount() {
        this.sendData()
    }

    sendData(pagination) {
        let opt = {
            page: pagination ? pagination.current-1 : 0,
            size: 10
        }
        this.props.getFavoriteData(opt)
    }

    onPageChange(pagination) {
        this.sendData(pagination)
    }

    onMailHandler(e, id, oid, number) {
        e.stopPropagation()
        e.preventDefault()
        hashHistory.push({
            pathname: RouterConst.MESSAGE_STEPUP_MOBILE,
            query: {
                text: 'b1',
                id: id,
                oid: oid,
                number: number
            }
        })
        
    }

    onWeiXinHandler(e, id, oid, number) {
        e.stopPropagation()
        e.preventDefault()

        hashHistory.push({
            pathname: RouterConst.WECHART,
            query: {
                text: 'c2',
                id: id,
                oid: oid,
                number: number
            }
        })
    }
    onAppHandler(e, id, oid, number) {
        e.stopPropagation()
        e.preventDefault()

        hashHistory.push({
            pathname: RouterConst.ROUTER_TOAPP,
            query: {
                text: 'd3',
                id: id,
                oid: oid,
                number: number
            }
        })
    }

    onClickHandler(e) {
        this.setState({ rowData: e })
    }

    onCloseHandler() {
        this.setState({ rowData: null })
    }

    render() {
        let { columns, loading, rowData } = this.state
        return (
            <div className="favorite-page-container">
                <div className="favorite-title">
                    <p>收藏群组</p>
                </div>
                <div className="favorite-tab">
                    <Table
                        columns={columns}
                        dataSource={this.props.favoriteList}
                        pagination={this.props.pagination}
                        loading={this.props.loading}
                        onRowClick={(e) => this.onClickHandler(e)}
                        onChange={(pagination) => this.onPageChange(pagination)}
                    />
                </div>
                {rowData ? <FavoriteItemInfo data={rowData} onClose={() => this.onCloseHandler()} /> : ""}
            </div>
        )
    }
}

FavoritePage.PropTypes = {
    favoriteList: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    pagination: PropTypes.object.isRequired
}

let mapStateToProps = state => ({
    favoriteList: state.favoriteReducer.favorite_list,
    loading: state.favoriteReducer.loading,
    pagination: state.favoriteReducer.pagination
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getFavoriteData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)