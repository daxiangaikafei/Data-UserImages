import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  * as ListConst from '../../static/const/dev'
import './index.scss'
class Wechat extends React.Component {
    componentDidMount() {
        let list = ListConst.List[this.props.params.list];
        list&&this.setState({
            title:list.title,
            content:list.content
        })
        
    }
    render() {
        let content=this.state?this.state.content:""
        return (
            <div className="dev-content-wrapper">
                <div ><h6>{this.state?this.state.title:""}</h6></div>
                <div className="dev-content" dangerouslySetInnerHTML={{__html: content}}  />
            </div>
        );
    }
}


Wechat.propTypes = {
}

let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wechat)