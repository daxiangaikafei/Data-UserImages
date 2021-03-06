import React from 'react';
import './index.scss';
import { Upload, Icon, message } from 'antd';

class Mobile extends React.Component{
      constructor(props){
        super(props);
        this.state={
          value:"",
          number:0
        } 
      }
      handlerLinkUrl(e){
        if(this.props.wapLink.indexOf("http://")<0){
            this.props.wapLink&&window.open("http://"+this.props.wapLink)
        }else{
            this.props.wapLink&&window.open(this.props.wapLink)
        }
      }
      render() {
          const {logo,title,url,content,data,reLang,oUrl,oImg,code,iframeUrl,fileString,wapLink,showType}=this.props;
          console.log(wapLink,2344)
          let component=data?data.map((item, index)=>{
            return(
              <div key={index} className="showPhone" onClick={(e)=>this.handlerLinkUrl(e)}>
                  {item.txt?<div>{item.txt}</div>:""}
                  <img  src={item.pic} alt=""  /> 
              </div>
            )
          }):"";
          let iframe=iframeUrl?<iframe src={iframeUrl}   className="iframes" ></iframe>:"";
          let icon=logo?<img src={logo} width="10px" />:""; 
          // let oHtml=fileString?<div dangerouslySetInnerHTML={{__html: fileString}}  className="oHtml"/>:"";
          return (
            <div className="msgIphone">
              <div className="phoneBg">
              </div>
              <div className="mobileContent">
              <div className="ip" >
                  <span>推送预览</span>
                  <div className="mobileClose" onClick={this.props.oClose.bind(this,0)}>
                    <Icon type="close" className="mob_closeicon"/><span>关闭</span>
                  </div>
                  <div className={showType=="weixing"?"oIp wx":"oIp"} >
                      <div className={title||content?"oHead":""}>
                        {icon}
                        <div>{title}</div>
                        {content? <div className="content">{content} </div>:""}
                       
                      </div>
                      {component}

                      {/*{iframe}*/}

                      {/*{oHtml}*/}
                  </div>
              </div>
              </div>
            </div>
          );
        }
};
export default Mobile;