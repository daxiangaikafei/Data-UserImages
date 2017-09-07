import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { Select, Input, Button,Icon,Modal,Checkbox} from 'antd';
import NumberInput from '../../../components/numberInput'
import DataSelect from '../../../components/dataSelect'
import Mobile from '../../../components/iphone'
import {getLinkUrl,getUserList,appSave} from './reducer/action'
const Option = Select.Option;

import './index.scss'
let timer=new Date().getTime();
class setUpMessage extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            Population: "",
            time:timer,
            sendType:1,
            ishow:0,
            hour:2,
            wapLink:""
        }
    }
  handleChange(msg,e){
    let state={};
    state[msg]=e;
    this.setState(state);
  }
  handlerChanges(msg,e){
    let state={};
    state[msg]=e.currentTarget.value;
    this.setState(state);
  }
  handlerSend(msg,e){
    this.setState({
        sendType:msg[0]
    })
    console.log(msg[0])
  }
  handlerShow(e){
    this.setState({
      ishow:e
    })
  }
  
  handlerClick(msg){
    this.setState({
      ishow:msg
    })
  }
  handlerAddUrl(msg){
    this.props.getLinkUrl().then(data=>this.setState({ address:data}))
  }
  handleChangeAddress(e){
    this.setState({
      messageId:e.split('&&')[0],
      wapLink:e.split('&&')[1]
    })
  }
  randomChar(l)  {
    let  x="0123456789qwertyuioplkjhgfdsazxcvbnm";
    let  tmp="";
    let timestamp = new Date().getTime();
    for(var  i=0;i<  l;i++)  {
    tmp  +=  x.charAt(Math.ceil(Math.random()*100000000)%x.length);
    }
    return  timestamp+tmp;
  }
  handlerCommit(e){
    const {name,userSelectGroupId,title,content,tel,sendType,time,wapLink,messageId,token,timeSetUp,hour}=this.state;
    let reg=/^1\d{10}$/;
    let msg;
    let otime;
    if(!name){
      msg="活动名称不能为空"
    }else if(!userSelectGroupId){
      msg="推送人群不能为空"
    }else if(!title){
      msg="消息标题不能为空"
    }
    else if(!content){
      msg="消息内容不能为空"
    }else if(!wapLink){
      msg="跳转链接不能为空"
    }else 
    if(sendType==1){
        otime=new Date().getTime()
    }else if(sendType==2&&time<new Date().getTime()){
         msg="推送时间必须大于当前时间"
    }else{
      otime=time
    }
    if(msg){
      Modal.error({
        title: msg
      });
      return false;
    }
    let _this=this;
     Modal.confirm({
        title: 'APP消息一旦推送将无法撤回，是否确认推送？',
        cancelText:'返回',
        onOk() {
         _this.props.appSave({
            "name":name,
            "userSelectGroupId":userSelectGroupId.split('&')[0],
            "selectNum":userSelectGroupId.split('&')[1],
            "title":title,
            "content":content,
            "link":wapLink,
            "type":3,
            "tunnelId":3,
            "tunnelName":"钱宝APP推送",
            "sendType":sendType,
            "sendTime":otime,
            "messageId":messageId,
            "token":token
          }).then(()=> {
                hashHistory.push({pathname:'message', query: { text:'a0'}})
          })
        }
      });
    
  }
  componentDidMount(){
    let loc=this.props.location.query;
    let locc=loc.id?(loc.id+'&'+loc.number+'&'+loc.oid):""
    this.props.getUserList().then(data=>{
      this.setState({
        Population:data,
        userSelectGroupId:locc,
        token:this.randomChar()
      })
    })
  }
  handlerCheckChange(e){
    this.setState({"timeSetUp":e.target.checked})
  }
  render() {
    const {Population,message,sendType,ishow,content,wapLink,id,address,userSelectGroupId,btnDisabled} = this.state;
    const children = [];
    Population&&Population.map((item,index)=> {
        children.push(<Option key={item.userSelectId+"&"+item.num+'&'+item.id} >{item.name}[{item.createTime}]{item.num}人</Option>);
    });
    
    const oAddress = [];
    address&&address.map((item,index)=> {
        oAddress.push(<Option key={item.id+"&&"+item.wapLink} >{item.wapLink}</Option>);
    });
    let hours=[]
    for(var i=1;i<13;i++){
        hours.push(<Option key={i*2} >{i*2}小时</Option>);
    }
    return (
      <div className="content-wrapper">
          <h6>1.推送活动</h6>
          <ul>
             <li><span>活动名称</span><Input  onChange={this.handlerChanges.bind(this,['name'])}/></li>
             <li>
               <span>推送人群</span>
               <Select   onChange={this.handleChange.bind(this,['userSelectGroupId'])} 
                  value={userSelectGroupId}>
                   {children}
                </Select>
             </li>
          </ul>
          <h6>2.推送内容</h6>
          <ul>
              <li className="w360">
                <span>消息标题</span>
                 <NumberInput number={30}  isOne={1} placeholder="请输入消息标题" nInputValue={this.handleChange.bind(this,['title'])}/>
              </li>
              <li className="displayTable">
                <span>消息内容</span>
                <NumberInput number={180} isOne={6} otherContent={wapLink} nInputValue={this.handleChange.bind(this,['content'])}/>
              </li>
              <li>
                <span>跳转链接</span>
                <Input   onChange={this.handlerChanges.bind(this,['wapLink'])} style={{width:360}}/>
              </li>
          </ul>
          <h6>3.推送选项</h6>
          <ul>
              <li>
                <span>推送通道</span>
                <Button className="tdBtn">钱宝APP推送</Button>
              </li>
              <li className="displayTable paddingB0">
                <span>推送时间</span>
                <div className="Info">
                   <span className="content">避免对用户造成骚扰，夜间24:00~白天8:00不会对用户进行推送，另请注意用户所在时区</span>
                   <Button className={sendType==1?"active_btn mr10":"mr10"} onClick={this.handlerSend.bind(this,['1'])}>马上发送</Button>
                   <Button className={sendType==2?"active_btn":""} onClick={this.handlerSend.bind(this,['2'])}>定时发送</Button>
                   <DataSelect onChange={this.handleChange.bind(this,['time'])}/>
                </div>
              </li>
          </ul>
          <div className="textCenter">
            <Button className="ts" onClick={this.handlerShow.bind(this)}>推送预览</Button>
            <Button className="send" onClick={this.handlerCommit.bind(this)}  disabled={btnDisabled?true:false}  >确认发送</Button>
          </div>
          {ishow==0?"":<Mobile oClose={this.handlerClick.bind(this)} title={this.state.title}  content={content}  />}
      </div>
    );
  }
}
let mapStateToProps = state => ({
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getUserList,getLinkUrl, appSave }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(setUpMessage)