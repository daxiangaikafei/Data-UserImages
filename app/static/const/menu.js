let data={
    "data":[
        {
            "icon":"menu1",
            "name":"画像营销",
            "children":[{
                "name":"营销活动列表",
                "url":"/message",
                "icon":"",
                "id":"a"
            },{
                "name":"手机短信推送",
                "url":"/message/setUpmessage",
                "icon":"",
                "id":"b"
            },{
                "name":"H5微信推送",
                "url":"/wechart",
                "icon":"",
                "id":"c"
            },{
                "name":"APP应用推送（建设中）",
                "url":"",
                "icon":"",
                "id":"d"
            }]
        },
        {
            "icon":"menu2",
            "name":"营销设置",
            "children":[{
                "name":"设置",
                "url":"/message/setUp",
                "icon":"",
                "id":"e"
            }]
        }
    ]
}




let data2={
    "data":[
        {
            "name":"开始前必读",
            "children":[{
                "name":"接口返回码说明",
                "url":"/dev/list1",
                "id":"a"
            },{
                "name":"对外接口汇总",
                "url":"/dev/list2",
                "id":"b"
            }]
        }
    ]
}

export {data,data2};