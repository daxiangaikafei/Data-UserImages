import React from 'react'
import { Icon,Button ,Input ,Upload, Modal } from 'antd'
import NumberInput from '../numberInput'

function getBase64(img, callback) {
const reader = new FileReader();
reader.addEventListener('load', () => callback(reader.result));
reader.readAsDataURL(img);
}

function beforeUploadF(file) {
    console.log(file.type)
    if (file.type.indexOf('image')<0) {
        Modal.error({title: "请上传图片"});
        return false;
    }
    const isLt2M = file.size / 1024 / 1024 /1024 *300 < 300;
        if (!isLt2M) {
        Modal.error({title: "图片不能大于300K"});
        return false;
    }
    return  isLt2M;
}
let datas=[]
class Pic extends React.Component{

constructor(props) {
    super(props)
    this.state = {
        imageUrl:""
    }
}
handleChange = (info) => {
    if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrl => {
            this.setState({ imageUrl })
            this.props.pic(imageUrl,info.file.response.data)
        });
    }
}
handlerChangeContent(index,e){
    this.props.txt(index,e)
}
handlerClick(index,event){
    event.stopPropagation();
    this.props.del(index)
}
render() {
    const imageUrl = this.state.imageUrl;
    return (
            <li className="addPics">
                <span>页面</span>
                <Upload className="avatar-uploader"
                        name="file"
                        showUploadList={false}
                        action="/qiniu/upload.do"
                        beforeUpload={beforeUploadF}
                        onChange={this.handleChange}>
                    {
                    imageUrl ?
                    <div>
                        <img src={imageUrl} alt="" className="avatar"/>
                        <div className="modfieldUpload">更改</div>
                        <div className="closeUpload" onClick={this.handlerClick.bind(this,['index','event'])}>
                            <Icon type="close" className="closeBtn" />
                        </div>
                    </div> :
                    <div>
                        <div className="add-icon">
                            <div className="iconBg"></div>
                            <Icon type="plus" className="avatar-uploader-trigger"/>
                        </div>
                        <span>上传图像分辨率1344 x 750，300kb以内</span>
                        <div className="closeUpload" onClick={this.handlerClick.bind(this,['index','event'])}>
                            <Icon type="close" className="closeBtn" />
                        </div>
                    </div>
                    }
                </Upload>
                <NumberInput number={180} isOne={6} nInputValue={this.handlerChangeContent.bind(this)} />
            </li>
        )
    }
}
export default Pic;