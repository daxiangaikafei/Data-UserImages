import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button, Tabs, Icon } from 'antd'
import SelectItem from '../../../components/searchSelectItem'

import { addFliterMenuList, changeFilterMenuSelect, getReportData, clearReportData } from '../reducer/actions'

import './index.scss'

class SelectContainer extends React.Component {

    constructor(props,context) {
        super(props,context)
        this.state = {
            pageSize: 6,
            currentPage: 0,
            isLoading: false
        }
    }
    
    componentDidMount(){
        this.setState({
            currentPage: 0,
            isLoading: false,
        })

        window.onscroll = (e)=>{
            this.onScrollHandler(e)
        }
    }

    onScrollHandler(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(this.isOnScroll) return
        if(scrollTop + document.body.offsetHeight > document.body.scrollHeight - 50){
            let { reportCount } = this.props, {pageSize, currentPage} = this.state
            let pages = Math.ceil(reportCount / pageSize)
            console.log(currentPage, pages, this.state.isLoading, "0000000000000000000")
            if(currentPage < pages - 1 && this.state.isLoading == false){
                this.setState({isLoading: true, currentPage: currentPage+1}, ()=>{
                    this.sendReportData()
                })
            }
        }
    }

    onGetReportHandler(){
        this.props.clearReportData()
        this.sendReportData()
    }

    sendReportData(){
        let opt = {page: this.state.currentPage, size: this.state.pageSize}
        this.props.getReportData(opt, ()=>{
            this.props.onChangeBtnFavoriteStatus(false)
            this.setState({isLoading: false})
        })
    }

    getTabs(){
        let TabPane = Tabs.TabPane
        return this.props.filterMenuList.map((menu, key)=>
            <TabPane tab={menu.name} key={key}>
                <div className="tab_panel_select_list">
                {
                    menu.list.map((item, index) => 
                        <SelectItem 
                            key={key + "," +index} 
                            title={item.name}
                            type={item.type || ""}
                            defautlValue={item.defaultValue}
                            options={item.options || []}
                            onChangeHandler={(value)=>this.props.changeFilterMenuSelect(item.id, index, value)}
                            onAddHandler={()=>this.props.addFliterMenuList(item.id)} 
                        />
                    )
                }
                </div>
            </TabPane>
        )
    }

    render(){
        return (
            <div className="selectContainer">
                <Tabs defaultActiveKey="0">{ this.getTabs() }</Tabs>

                <div className="button-div">
                    <div className="tip-div"><Icon type="exclamation-circle-o" /><span>选择左侧展示选项，获取相应图表展示</span></div>
                    <div className="left-div">
                        <Button size="large" onClick={this.props.onShowFavorite} disabled={this.props.btnFavoriteStatus}>收藏筛选</Button>
                        <Button size="large" onClick={()=>this.onGetReportHandler()}>画像计算</Button>
                    </div>
                </div>
            </div>
        )
    }
}

SelectContainer.PropTypes = {
    filterMenuList: PropTypes.array.isRequired,
    onShowFavorite: PropTypes.func.isRequired,
    btnFavoriteDisabled: PropTypes.bool.isRequired,
    onChangeBtnFavoriteStatus: PropTypes.func.isRequired,

    reportCount: PropTypes.number.isRequired,
}

let mapStateToProps = state => ({
    filterMenuList: state.searchList.filterMenuList,
    reportCount: state.searchList.reportCount
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addFliterMenuList, changeFilterMenuSelect, getReportData, clearReportData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer)