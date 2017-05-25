import React, { PropTypes } from 'react'

import './index.scss'

class UserMirrorTableItem extends React.Component{
    constructor(props, context){
        super(props, context)
    }

    getTableItem(){
        let {data} = this.props, list = data.children
        let components = []

        for(let i=0; i<list.length; i=i+3){
            let temp = list.slice(i, i+3)
            components.push(
                <div className="table-tr-div">{
                    temp.map((obj, j)=>
                        <div key={i*3+j} className="table-tr-item">
                            <div className="table-tr-item-title">{obj.name}</div>
                            <div className="table-tr-item-value">{obj.children&&obj.children.length ? obj.children[0].name : ""}</div>
                        </div>
                    )}
                </div>
            )
        }
        return components
    }

    render(){
        let {data} = this.props

        return(
            <div className="userMirrorTableItem">
                <div className="table-item-title">{data.name}</div>
                <div className="table-list">
                    {this.getTableItem()}
                </div>
            </div>
        )
    }
}

UserMirrorTableItem.PropTypes = {
    data: PropTypes.object.isRequired
}

export default UserMirrorTableItem