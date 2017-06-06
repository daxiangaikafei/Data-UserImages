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
        return (
            <div className="user-mirror-container">
                <div className="user-mirror-title">用户标签: {this.props.username}</div>
                <div className="user-mirror-list">
                    { this.props.data.map((obj, key) => <MirrorItem key={key} data={obj} />) }
                </div>
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