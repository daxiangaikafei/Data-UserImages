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
       this.props.wapLink&&window.open(this.props.wapLink)
       
       this.props.wapLink&&window.open(this.props.wapLink)
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
          return (
            <div className="appIphone">
              <div className="phoneBg">
              </div>
              <div className="mobileContent">
              <div className="ip" >
                  <span>推送预览</span>
                  <div className="mobileClose" onClick={this.props.oClose.bind(this,0)}>
                    <Icon type="close" className="mob_closeicon"/><span>关闭</span>
                  </div>
                  <div className="oIp" >
                      <div>
                        <div className="app-header"><span></span>9分钟前</div>
                        <div className="app-content">
                          <div className="app-title">{this.props.title}</div>
                          {this.props.content}
                        </div>
                      </div>
                      
                      <div>
                        <div>
                            <div className="app-title">
                              <div>{this.props.title}</div>
                              <span>9分钟前</span>
                            </div>
                            <div className="app-content">
                              {this.props.content}
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          );
        }
};
export default Mobile;