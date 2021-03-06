import React,{PropTypes} from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import {Select, Icon,Button ,Input ,Upload ,Tabs ,Modal,Radio} from 'antd'
import StepNav from '../../../../components/stepNav'
import NumberInput from '../../../../components/numberInput'
import Mobile from '../../../../components/mobilePhone'
import Pic from '../../../../components/pic'
import {
    getUserList,
    changeName,
    changePeople,
    changeTitle,
    changeContent,
    changeLogo,
    changeUrl,
    changePic,
    changeTxt,
    commitWechat,
    addPic,
    oDelete,
    setFileString,
    setUrl,
    removeData,
    getLogo
} from './reducer/action'
import './index.scss'
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
let data=[];
function getBase64(img, callback) {
const reader = new FileReader();
reader.addEventListener('load', () => callback(reader.result));
reader.readAsDataURL(img);
}

function beforeUpload(file) {

if (file.type.indexOf('image')<0) {
        Modal.error({title: "请上传图片"});
return false;
}
const isLt2M = file.size / 1024 / 1024 /1024*300 < 300;
if (!isLt2M) {
        Modal.error({title: "图片不能大于300k"});
return false;
}
return  isLt2M;
}
class Wechat extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
            value:1,
            ishow:0,
            tabs:1
        }
    }
handlerChangeName(msg){
    this.props.changeName(msg)
}
handlerChangePeople(msg){
    this.props.changePeople(msg)
}

handlerChangeTitle(msg){
    this.props.changeTitle(msg)
}
handlerChangeContent(msg){
    this.props.changeContent(msg)
}
handlerChangeUrl(msg){
    this.props.changeUrl(msg.currentTarget.value)
}
handlerchangeEssay(e){
    this.setState({
         essay:e.target.value
    })
}
handlerLinkUrl(){
    window.open(this.state.url)
}
handlerAddClickLj(){
    this.setState({
        isShowLj:true
    })
}
handlerAddClickPic(){
    this.props.addPic()
}

goNext(){
    const {name,userSelectGroupId,title,content,linkurl,data,logo}=this.props;
    const datas=data.map((item,index)=>({
        "url":item.url,
        "txt":item.txt
    }))
    console.log(userSelectGroupId,567,this.state.userSelectGroupId,1234)
    let msg;
    if(!name){
        msg="活动标题不能为空"
    }else if(!userSelectGroupId&&!this.state.userSelectGroupId){
        msg="推送人群不能为空"
    }
    else if(!title){
        msg="消息标题不能为空"
    }else if(!content){
        msg="消息内容不能为空"
    }else if(!logo){
        msg="标题图不能为空"
    }else if(!linkurl){
        msg="跳转链接不能为空"
    }else{
        data.map((item,key)=>{
                    if(!item.pic){
                        msg="请上传图片"
                    }else if(!item.txt){
                        msg="请填写短文"
                    }
                })
    }
        
    if(msg){
        Modal.error({
            title: msg
        });
    }
    else{
        this.props.commitWechat({
            name:name,
            userSelectGroupId:userSelectGroupId.split('&')[0]||this.state.userSelectGroupId.split('&')[0],
            selectNum:userSelectGroupId.split('&')[1]||this.state.userSelectGroupId.split('&')[1],
            title:title,
            content:content,
            logo:logo,
            link:linkurl.indexOf("http://")==0?linkurl:"http://"+linkurl,
            shortContent:datas,
            type:2,
            token:this.state.token
        }).then((data)=> {
            hashHistory.push({
                pathname:'wechartNext',
                query:{
                    userSelectGroupId:userSelectGroupId.split('&')[0]||this.state.userSelectGroupId.split('&')[0],
                    messageId:data.messageId,
                    text:'c2'
                }
            })
            this.setState({
                btnDisabled:true
            })
         })   
    }
}
handlerImport(){
    hashHistory.push("/importChart")
}
handleChangeLogo = (info) => {
    if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, logo => {
                this.setState({
                    logo:logo
                })
                this.props.changeLogo(info.file.response.data)
        });
    }
}
handlerPic(index,msg,url){
    this.props.changePic(index,msg,url)
}

handlerTxt(index,msg){
    this.props.changeTxt(msg,index)
}

handlerDelete(index){
    this.props.oDelete(index)
}
handleChangeRadio(e){
    console.log(e.target.value)
        this.setState({
            value: e.target.value,
            name:""

        });
        this.props.setFileString("")
        this.props.setUrl("")
}
handlerChangePageUrl(e){
        this.props.setUrl(e.target.value)
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
    this.props.changeName("")
    this.props.changePeople("")
    this.props.changeTitle("")
    this.props.changeContent("")
    this.props.changeLogo("")
    this.props.changeUrl("")
    this.props.removeData("")
  }
  handlerts(msg){
      this.setState({
          ishow:1
      })
  }
  
  handlerClick(msg){
    this.setState({
      ishow:msg
    })
  }
  handlerTab(e){
      this.setState({
          tabs:e
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
render() {
    
    const {Population,ishow,tabs,stepNum,status,value,name} = this.state;
    const {title,content,linkurl,data,pageUrl,fileString,logo}=this.props;
    const children = [];
    Population&&Population.map((item,index)=> {
        children.push(<Option key={item.userSelectId+"&"+item.num+'&'+item.id} >{item.name}[{item.createTime}]{item.num}人</Option>);
    });
    let components = data.map((data, index)=>{
            return <Pic key={index} 
            pic={(value,url)=>this.handlerPic(index, value,url)} 
            txt={(value)=>this.handlerTxt(index, value)}
            del={(value)=>this.handlerDelete(index, value)}/>
    })

    const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange: (info) =>{
                if (info.file.type=="application/x-zip-compressed"&&info.file.status !== 'uploading') {
                    this.setState({
                        name:info.file.name,
                    })
                    this.props.setFileString(info.file)
                }
            }
         };
     const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
    return (
    <div className="wechat">
         <Tabs type="card" onChange={this.handlerTab.bind(this)}>
            <TabPane tab="新建H5页面" key="1">
                <div className="content">
                    <ul>
                        <li>
                            <span>活动标题</span>
                            <NumberInput number={20} isOne={1} nInputValue={this.handlerChangeName.bind(this)}/>
                        </li>
                        <li>
                            <span>推送人群</span>
                            <Select  className="sel" onChange={this.handlerChangePeople.bind(this)} value={this.props.userSelectGroupId||this.state.userSelectGroupId}>
                                {children}
                            </Select>
                        </li>
                        <li>
                            <span>消息标题</span>
                            <NumberInput number={50} isOne={1} nInputValue={this.handlerChangeTitle.bind(this)}/>
                        </li>
                        <li className="messageContent">
                            <span>消息内容</span>
                             <NumberInput number={240} isOne={6} nInputValue={this.handlerChangeContent.bind(this)}/>
                        </li>
                        <li>
                            <span>标题图</span>
                            <Upload className="avatar-uploader logoUpload"
                                    name="file"
                                    showUploadList={false}
                                    action="/qiniu/upload.do"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChangeLogo}>
                                {
                                this.state.logo ?
                                <img src={this.state.logo} alt="" className="avatar"/> :
                                <Icon type="plus" className="avatar-uploader-trigger"/>
                                }
                            </Upload>
                        </li>
                        
                        <li>
                            <span>跳转链接</span>
                            <Input onChange={(e)=>this.handlerChangeUrl(e)} />
                        </li>
                         {components}
                        <li>
                            <span></span>
                            <Button className="blueBtn"  onClick={this.handlerAddClickPic.bind(this)}>添加页面</Button>
                        </li>
                    </ul>
                </div>
                <div className="textCenter">
                        <Button className="ts" onClick={this.handlerts.bind(this)}>推送预览</Button>
                        <Button className="send"  onClick={this.goNext.bind(this)}>确认发送</Button>
                 </div>
            </TabPane>
            {/*<TabPane tab="导入已有H5页面" key="2">
                <div className="content contentImport">
                        <RadioGroup value={this.state.value}  onChange={this.handleChangeRadio.bind(this)}>
                            <Radio style={radioStyle} value={1}>上传H5代码文件包
                              <Upload   {...props}>
                                 <Input value={name}  className="sendInput"/><Button className="sendButton" disabled={value==1?false:true}>上传</Button>
                              </Upload>
                            </Radio>
                            <Radio style={radioStyle} value={2}>上传H5代码文件包
                                <Input value={pageUrl} onChange={this.handlerChangePageUrl.bind(this)} readOnly={value==2?false:true} />
                            </Radio>
                        </RadioGroup>
               </div>
                        
                <div className="textCenter">
                        <Button className="ts"  onClick={this.handlerts.bind(this)}>推送预览</Button>
                        <Button className="send" >确认发送</Button>
                 </div>
            </TabPane>*/}
        </Tabs>
        {tabs==1&&ishow!=0?<Mobile oClose={this.handlerClick.bind(this)}  data={data} wapLink={this.props.linkurl} showType="weixing" />:""}
        
        {tabs==2&&ishow!=0?<Mobile oClose={this.handlerClick.bind(this)}  fileString={fileString} iframeUrl={pageUrl}  showType="weixing" />:""}
    </div>
    );
    }
}


Wechat.propTypes = {
}

let mapStateToProps = state => ({
    name:state.wechatReducer.name,
    userSelectGroupId:state.wechatReducer.userSelectGroupId,
    title:state.wechatReducer.title,
    content:state.wechatReducer.content,
    linkurl:state.wechatReducer.linkurl,
    logo:state.wechatReducer.logo,
    data:state.wechatReducer.data,
    fileString:state.wechatReducer.fileString,
    pageUrl:state.wechatReducer.pageUrl
})

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUserList, 
        changeName,
        changePeople,
        commitWechat,
        changeTitle,
        changeContent,
        changeUrl,
        changeLogo,
        changePic ,
        changeTxt,
        addPic,
        oDelete,
        setFileString,
        setUrl,
        removeData,
        getLogo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wechat)