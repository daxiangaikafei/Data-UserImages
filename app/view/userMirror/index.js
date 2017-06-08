import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MirrorItem from './MirrorItem'

import { getUserMirror } from './reducer/actions'

import './index.scss'


class UserMirror extends React.Component{

    constructor(props, context) {
        super(props, context)
    }
    
    componentDidMount(){
        let userId = this.props.params.userId
        if(userId) this.props.getUserMirror(userId)
    }

    render(){
        const {data} = this.props;
        return (
            <div className="oFlex">
                {
                    data.length===0?
                    <div className="nData">暂无数据</div>:
                    <div className="user-mirror-container">
                        <div className="user-mirror-title">用户标签: {this.props.username}</div>
                        <div className="user-mirror-list">
                            { data.map((obj, key) => <MirrorItem key={key} data={obj} />) }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

UserMirror.PropTypes = {
    data: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired,
}

let mapStateToProps = state => ({
    data: state.userMirror.mirrorData,
    username: state.userMirror.username
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserMirror }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMirror)