import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Select, Icon, Cascader } from 'antd'

import './index.scss'

class SelectItem extends React.Component{

    constructor(props,context) {
        super(props,context)
    }

    componentDidMount(){
    }

    onCascaderChange(value){
        if(value.length > 0){
            this.props.onChangeHandler(value[value.length-1])
        }else{
            this.props.onChangeHandler("")
        }
    }

    getComponents(){
        let { type, defautlValue, cityCode } = this.props
        if(type == 3 || type == 4){
            let value = defautlValue ? [defautlValue.substring(0, 2) + "0000", defautlValue.substring(0, 4) + "00", defautlValue] : ""

            let opts = cityCode ? type == 3 ? cityCode.cityCode3 : cityCode.cityCode2 : []
            return (
                <Cascader options={opts} onChange={(e)=>this.onCascaderChange(e)} value={value} placeholder="未选择" allowClear={false} />
            )
        }else{
            return (
                <Select className="select" value={defautlValue + ""} onChange={this.props.onChangeHandler} disabled={type == 0 ? true : false }>
                    {
                        this.props.options.map((obj, index) => 
                            <Select.Option key={index} value={obj.value  + ""}>{obj.name}</Select.Option>
                        )
                    }
                </Select>
            )
        }
    }

    render(){
        let { title, defautlValue, type } = this.props
        return (
            <div className="selectItem">
                <div>
                    <span className="selectItem-title">{title}</span>
                    {type == 2 ? <Icon className="btn-add" type="plus-circle-o" onClick={this.props.onAddHandler} /> : ""}
                </div>
                { this.getComponents() }
            </div>
        )
    }
}

SelectItem.PropTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    defautlValue: PropTypes.any,
    onChangeHandler: PropTypes.func.isRequired,
    onAddHandler: PropTypes.func,
    cityCode: PropTypes.object.isRequired
}

let mapStateToProps = state => ({
    cityCode: state.searchList.cityCode
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectItem)