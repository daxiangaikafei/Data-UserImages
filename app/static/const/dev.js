import React from 'react'

export const List = {
    list1: {
        title: "全局返回码说明",
        content: '<p>全局返回码说明如下：</p>'+
                 '<table  cellspacing="0" cellpadding="0" width="640"><tbody >'+
                 '<tr class="firstRow thead"><td>返回码</td><td>说明</td></tr>'+
                 '<tr class="nextRow thead"><td>10001</td><td>invalid appid</td></tr>'+
                 '</tbody></table>'
    },
    list2: {
        title: "对外接口汇总",
        content: '<p>token获取</p>'+
                 '<table  cellspacing="0" cellpadding="0" width="640"><tbody >'+
                 '<tr class="nextRow nextRow2 thead"><td>域名</td><td>msapi.tengrong-data.com</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>URL</td><td>api/token</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>类型</td><td>GET</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>请求参数</td><td>"appid":"XX78686666",<br>"secret":"234234234234"</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>返回结果</td><td>"access_token": "83A4D1F5BF447AE0EC8738CE507471EDA8279D9F2849BB383268509288B40CF037<br>ACB8A6CF79724B92D1F94F06900DB8FD429BD0704CEECF41567C8D17B7CC2B",'+
                 '<br>"expires_in": 86400</td></tr>'+
                 '</tbody></table>'+
                 
                 '<p>单用户画像查询</p>'+
                 '<table  cellspacing="0" cellpadding="0" width="640"><tbody >'+
                 '<tr class="nextRow nextRow2 thead"><td>域名</td><td>msapi.tengrong-data.com</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>URL</td><td>api/getEntityByUserId</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>类型</td><td>GET</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>请求参数</td><td>id=100002<br>username=admin (可以为空)<br>'+
                 'token=83A4D1F5BF447AE0EC8738CE507471ED866E3F874A44A56D2594729CA98798CFCD0FE608A0B<br>8EE2A0A10FA9A054DCBC2FD429BD0704CEECF41567C8D17B7CC2B'+
                 '</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>返回结果</td><td>'+
                 '{'+
                   '"result": {'+
                        '"mirror": ['+
                            '{'+
                                '"children": ['+
                                   ' {'+
                                        '"children": ['+
                                            '{'+
                                                '"children": ['+
                                                   ' {'+
                                                        '"name": "1,2"'+
                                                    '}'+
                                                '],'+
                                                '"name": "用户注册归属"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                    '{'+
                                                        '"name": "1"'+
                                                    '}'+
                                                '],'+
                                                '"name": "性别"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                    '{'+
                                                       ' "name": "36"'+
                                                    '}'+
                                                '],'+
                                                '"name": "年龄"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                    '{'+
                                                        '"name": "2"'+
                                                    '}'+
                                                '],'+
                                                '"name": "婚姻"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                   ' {'+
                                                        '"name": "-1"'+
                                                    '}'+
                                                '],'+
                                                '"name": "子女"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                    '{'+
                                                        '"name": "3"'+
                                                    '}'+
                                                '],'+
                                                '"name": "学历"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                    '{'+
                                                        '"name": "320114"'+
                                                    '}'+
                                                '],'+
                                                '"name": "身份证归属地"'+
                                            '},'+
                                            '{'+
                                                '"children": ['+
                                                   ' {'+
                                                       ' "name": "1351511"'+
                                                    '}'+
                                                '],'+
                                                '"name": "手机归属地"'+
                                            '}'+
                                       ' ],'+
                                        '"name": "人口"'+
                                    '},'+
                                    '{'+
                                        '"children": ['+
                                            '{'+
                                                '"children": ['+
                                                   ' {'+
                                                       ' "name": "-1"'+
                                                    '}'+
                                                '],'+
                                                '"name": "手机品牌"'+
                                            '},'+
                                           ' {'+
                                               ' "name": "手机型号"'+
                                           ' },'+
                                        '],'+
                                       ' "name": "位置"'+
                                    '}'+
                                '],'+
                               ' "icon": "people",'+
                                '"name": "基础"'+
                            '}'+
                        ']'+
                    '}'+
               ' }'+
                 '</td></tr>'+
                 '</tbody></table>'+
                 '<p>用户画像多条件获取</p>'+
                 '<table  cellspacing="0" cellpadding="0" width="640"><tbody >'+
                 '<tr class="nextRow nextRow2 thead"><td>域名</td><td>msapi.tengrong-data.com</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>URL</td><td>api/multySearchForEntity</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>类型</td><td>GET</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>请求参数</td><td>"base_sex"=1</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>返回结果</td><td>{\
    "base_lbs_city": "431002",\
    "invest_is_bcard": "Y",\
    "buy_order_sum": "1371.43",\
    "leisure_fans_add": 0,\
    "buy_return_goods": 0,\
    "leisure_qdou_count": 0,\
    "base_time_net_1": 5,\
    "base_lbs_live_code": "431002",\
    "base_time_net_2": 6,\
    "online_search_count": 0,\
    "dt": "2017-06-04",\
    "user_type_1": "0",\
    "user_type_2": "0",\
    "user_type_3": "0",\
    "user_type_4": "0",\
    "commut_product_share_60": 0,\
    "buy_coupon_sum": "30.13",\
    "invest_is_data_ass": "Y",\
    "leisure_tv_watch_count": 0,\
    "leisure_tv_fans_all": 0,\
    "user_channel": "",\
    "invest_admin_cost": 0,\
    "base_born_addr": "432801",\
    "base_lbs_work_xy": "[113.0537,25.7693]",\
    "base_age": 48,\
    "base_sys_latest": "Android",\
    "leisure_travel_30": 0,\
    "invest_valid_refund": 0,\
    "base_bachlor": 0,\
    "e_user_id": "lACGTz6low7bbI5k3AlGyZvkjNnFxlzwNzJWhBHxxk4="\
}'+
                 '</tbody></table>'
    },


}