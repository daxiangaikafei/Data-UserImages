import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import UserMirrorTableMenu from './userMirrorTableMenu'
import UserMirrorTableContainer from './userMirrorTableContainer'

import { getUserMirror } from '../userMirror/reducer/actions'

import './index.scss'

class UserMirrorTable extends React.Component{

    constructor(props, context){
        super(props, context)
    }

    componentDidMount(){
        let userId = this.props.params.userId
        if(userId) this.props.getUserMirror(userId)
    }

    render(){
        return (
            <div className="user-mirror-table">
                <UserMirrorTableMenu data={this.props.data} />
                <UserMirrorTableContainer data={this.props.data} username={this.props.username} />
            </div>
        )
    }
}

UserMirrorTable.PropTypes = {
    data: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
}

let mapStateToProps = state => ({
    data: state.userMirror.mirrorData,
    username: state.userMirror.username
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUserMirror }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMirrorTable)