import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Button, Tabs, Icon } from 'antd'
import SelectItem from '../../../components/searchSelectItem'

import { addFliterMenuList, changeFilterMenuSelect } from '../reducer/actions'

import './index.scss'

class SelectContainer extends React.Component {

    constructor(props,context) {
        super(props,context)
    }
    
    componentDidMount(){
    }

    onGetReportHandler(){
        this.props.getReportData(null, true)
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
                    {/*<div className="calculation" style={{display:this.props.btnFavoriteStatus?"none":"block"}}>
                       <Icon type="exclamation-circle-o" />
                       <span> 用户统计数:{this.props.reportNumber}</span>
                       <span>计算时间:{this.props.time}</span>
                    </div>*/}
                    
                    
                </div>
            </div>
        )
    }
}

SelectContainer.PropTypes = {
    filterMenuList: PropTypes.array.isRequired,
    onShowFavorite: PropTypes.func.isRequired,
    getReportData: PropTypes.func.isRequired,
}

let mapStateToProps = state => ({
    filterMenuList: state.searchList.filterMenuList,
    reportNumber: state.searchList.reportNumber,
    time: state.searchList.time,
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addFliterMenuList, changeFilterMenuSelect }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer)