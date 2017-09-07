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
                 '<tr class="nextRow nextRow2 thead"><td>请求参数</td><td>appid:XX78686666,<br>secret:234234234234</td></tr>'+
                 '<tr class="nextRow nextRow2 thead"><td>返回结果</td><td>access_token: 83A4D1F5BF447AE0EC8738CE507471EDA8279D9F2849BB383268509288B40CF037<br>ACB8A6CF79724B92D1F94F06900DB8FD429BD0704CEECF41567C8D17B7CC2B,'+
                 '<br>expires_in: 86400</td></tr>'+
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
                 '<tr class="nextRow nextRow2 thead"><td>请求参数</td><td>(以性别为例)<br>base_sex=1<br>'+
                 '<a href="/#/dev/list3?text=c2">详细参数说明请查看：基本标签定义</a>'+
                 'token=83A4D1F5BF447AE0EC8738CE507471ED866E3F874A44A56D2594729CA98798CFCD0FE608A0B<br>8EE2A0A10FA9A054DCBC2FD429BD0704CEECF41567C8D17B7CC2B'+
                 '</td></tr>'+
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
    list3: {
        title:"基本标签定义",
        content:'<table  class="oTable" cellspacing="0" cellpadding="0">\
                        <tr class="firstRow thead"><td>指标大类</td><td>指标小类</td><td>中文名</td><td>英文名</td><td>指标定义</td></tr>\
                         <col width="84">\
                        <col width="85">\
                        <col width="228">\
                        <col width="339">\
                        <col width="651">\
                        <tr>\
                        <td rowspan="37" width="84">基础</td>\
                        <td rowspan="16" width="85">人口</td>\
                        <td width="228">用户id［对外加密］</td>\
                        <td width="339">e_user_id</td>\
                        <td width="651">e_user_id    是由钱宝user_id 加密后转好而来<br>\
                            e_user_id = Encode[user_id]<br>\
                            user_id = Decode[e_user_id]<br>\
                            格式12位随机数字<br>\
                            范围： 100000000000-999999999999<br>\
                            要求： 解密函数Decode[e_user_id]接口 需要开放给集团内部子公司调用</td>\
                        </tr>\
                        <tr>\
                        <td width="228">用户id［真实集团内部用］</td>\
                        <td width="339">user_id</td>\
                        <td width="651">集团内用户唯一识别id</td>\
                        </tr>\
                        <tr>\
                        <td width="228">用户来源</td>\
                        <td width="339">user_channel</td>\
                        <td width="651">通过user_id    关联的手机号码，查询qbike和宝约用户系统，如果手机号码在宝约和qbike中注册，则标记出来，可以标记多个渠道，用逗号分隔：例如1 2 3<br>\
                            qbao渠道：1<br>\
                            qbike渠道：2<br>\
                            baoyue渠道：3<br>\
                            参照现有渠道码，没有的补全</td>\
                        </tr>\
                        <tr>\
                        <td width="228">用户注册归属</td>\
                        <td width="339">user_type</td>\
                        <td width="651">通过关联的手机号码，查询qbike和宝约用户系统，如果手机号码在宝约和qbike中注册，则标记出来，可以标记多个渠道，用逗号分隔：例如1    2 3<br>\
                            1.  同时是 qbao用户 qbike用户，宝约用户：  1,2,3<br>\
                            2.  仅仅qbao用户 ： 1<br>\
                            3.  仅仅qbike用户： 2<br>\
                            4.  同时是qbike和宝约用户：2,3<br>\
                            。。。。。。</td>\
                        </tr>\
                        <tr>\
                        <td width="228">性别</td>\
                        <td width="339">base_sex</td>\
                        <td width="651">男：    1<br>\
                            女： 2<br>\
                            不清楚／无： 0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">年龄</td>\
                        <td width="339">base_age</td>\
                        <td width="651">0-120</td>\
                        </tr>\
                        <tr>\
                        <td width="228">婚姻</td>\
                        <td width="339">base_marriage</td>\
                        <td width="651">未婚：1<br>\
                            已婚：2<br>\
                            未知：－1<br>\
                            其他：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">子女</td>\
                        <td width="339">base_child</td>\
                        <td width="651">未知：－1  ，无：0 ， 一个 ：1，  三个：3. 类推</td>\
                        </tr>\
                        <tr>\
                        <td width="228">学历</td>\
                        <td width="339">base_bachlor</td>\
                        <td width="651">未知：－1  <br>\
                            小学：1<br>\
                            初中：2<br>\
                            高中（中专）：3<br>\
                            大专：4<br>\
                            本科：5<br>\
                            硕士：6<br>\
                            博士：7<br>\
                            其他：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">身份证归属地－区县编码</td>\
                        <td width="339">base_born_addr</td>\
                        <td width="651">身份证前6位，中国行政区码：<br>\
                            <br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            需龚明辉增加一张维度表见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">身份证归属地-省编码</td>\
                        <td width="339">base_born_addr</td>\
                        <td width="651">身份证前6位，中国行政区码：<br>\
                            <br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            需龚明辉增加一张维度表见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">身份证归属地－市编码</td>\
                        <td width="339">base_born_addr</td>\
                        <td width="651">身份证前6位，中国行政区码：<br>\
                            <br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            需龚明辉增加一张维度表见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">手机归属地</td>\
                        <td width="339">base_mob_addr</td>\
                        <td width="651">取绑定的手机号得到<br>\
                            中国行政区码4位：例如 3100<br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            需龚明辉增加一张维度表见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">身份证归属地-省编码</td>\
                        <td width="339">base_mob_addr</td>\
                        <td width="651">取绑定的手机号得到<br>\
                            中国行政区码4位：例如 3100<br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            需龚明辉增加一张维度表见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">身份证归属地－市编码</td>\
                        <td width="339">base_mob_addr</td>\
                        <td width="651">取绑定的手机号得到<br>\
                            中国行政区码4位：例如 3100<br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            需龚明辉增加一张维度表见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">注册时间</td>\
                        <td width="339">base_regit_date</td>\
                        <td width="651">用户第一次注册qbao,qbike,baoyue时间，如果有多个取最早的一个时间<br>\
                            格式：YYYY-mm-dd</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="4" width="85">设备</td>\
                        <td width="228">手机品牌</td>\
                        <td width="339">base_phone_brand</td>\
                        <td width="651">iphone:    1<br>\
                            sumsum: 2<br>\
                            huawei:3<br>\
                            oppo:4<br>\
                            其他：0<br>\
                            未知：－1</td>\
                        </tr>\
                        <tr>\
                        <td width="228">手机型号</td>\
                        <td width="339">base_phone_type</td>\
                        <td width="651">按公司现有的型号<br>\
                            分类出文本</td>\
                        </tr>\
                        <tr>\
                        <td width="228">最近一次使用的操作系统</td>\
                        <td width="339">base_sys_latest</td>\
                        <td width="651">IOS<br>\
                            ANDROID<br>\
                            WINDOWS<br>\
                            OTHERS</td>\
                        </tr>\
                        <tr>\
                        <td width="228">常用操作系统</td>\
                        <td width="339">base_sys_ususal</td>\
                        <td width="651">IOS<br>\
                            ANDROID<br>\
                            WINDOWS<br>\
                            OTHERS</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="17" width="85">位置</td>\
                        <td width="228">周末生活第一位置</td>\
                        <td width="339">base_lbs_live_xy</td>\
                        <td width="651">15天内，    周六－周日9-11点 ，14-17点<br>\
                            排除居住位置<br>\
                            停留在同一位置［直径50米内］最多的坐标点中心位置，则判定为周末生活第一位置。<br>\
                            位置和居住位置不是同一位置，两位置大于100米<br>\
                            输出经纬度坐标：［x,y］<br>\
                            条件不满足：［0,0］</td>\
                        </tr>\
                        <tr>\
                        <td width="228">周末生活第一位置－经度</td>\
                        <td width="339">base_lbs_live_x</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">周末生活第一位置－纬度</td>\
                        <td width="339">base_lbs_live_y</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">周末生活第一位置行政区码</td>\
                        <td width="339">base_lbs_live_code</td>\
                        <td width="651">调用百度地图或高德地图，根据坐标解析出省市区，再转为中国行政区码：<br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 <br>\
                            见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">周末生活第一位置行政区码</td>\
                        <td width="339">base_lbs_live_code_shen</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">周末生活第一位置行政区码</td>\
                        <td width="339">base_lbs_live_code_shi</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">常驻地</td>\
                        <td width="339">base_lbs_city</td>\
                        <td width="651">30天内最常出现的地区（建议取城市），<br>\
                            出行政编码见底部《省市区县行政国标》</td>\
                        </tr>\
                        <tr>\
                        <td width="228">居住位置</td>\
                        <td width="339">base_lbs_home_xy</td>\
                        <td width="651">14天内，6-7点，<br>\
                            14天内在同一位置附近［直径50米内］，则取核心坐标判定为居住位置。<br>\
                            输出经纬度坐标：［x,y］</td>\
                        </tr>\
                        <tr>\
                        <td width="228">居住位置－经度</td>\
                        <td width="339">base_lbs_home_x</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">居住位置－纬度</td>\
                        <td width="339">base_lbs_home_y</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">居住位置行政区码</td>\
                        <td width="339">base_lbs_home_code</td>\
                        <td width="651">调用百度地图或google地图，根据坐标解析出省市区，再转为中国行政区码：<br>\
                            见底部《省市区县行政国标》<br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 </td>\
                        </tr>\
                        <tr>\
                        <td width="228">居住位置行政区码－省</td>\
                        <td width="339">base_lbs_home_code_shen</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">居住位置行政区码－市</td>\
                        <td width="339">base_lbs_home_code_shi</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">工作位置</td>\
                        <td width="339">base_lbs_work_xy</td>\
                        <td width="651">最近14天内，白天10-12点    ， 周一到周五，停留时间最长的一个地点<br>\
                            超过45天在同一位置附近［直径50米内］，则判定为工作位置。<br>\
                            居住位置和工作位置不是同一位置，两位置大于50米<br>\
                            输出经纬度坐标：［x,y］<br>\
                            条件不满足：［0,0］</td>\
                        </tr>\
                        <tr>\
                        <td width="228">工作位置－经度</td>\
                        <td width="339">base_lbs_work_x</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">工作位置－纬度</td>\
                        <td width="339">base_lbs_work_y</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="228">工作位置行政区码</td>\
                        <td width="339">base_lbs_work_code</td>\
                        <td width="651">调用百度地图或google地图，根据坐标解析出省市区，再转为中国行政区码：<br>\
                            见底部《省市区县行政国标》<br>\
                            需提供一份公司统一用的：行政区码－省市区县对应表给我们 </td>\
                        </tr>\
                        <tr>\
                        <td width="84">　</td>\
                        <td width="85">　</td>\
                        <td width="228">工作位置行政区码－省</td>\
                        <td width="339">base_lbs_work_code_shen</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td width="84">　</td>\
                        <td width="85">　</td>\
                        <td width="228">工作位置行政区码－市</td>\
                        <td width="339">base_lbs_work_code_shi</td>\
                        <td width="651">同上</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="20" width="84">购物</td>\
                        <td rowspan="16" width="85">购物</td>\
                        <td width="228">品类购买偏好<br>\
                        </td>\
                        <td width="339">buy_goods_prefer</td>\
                        <td width="651"><br>\
                            用户15天内成功下单的产品类型如上所示，按下单次数降序排列产品类型,取top5<br>\
                            用逗号分隔<br>\
                            输出例子：  海鲜 大家电 成人用品，    家装 电子数码 珠宝首饰 农业  ， 母婴儿童<br>\
                            产品类目表见《产品类目表》底部分页面<br>\
                         </td>\
                        </tr>\
                        <tr>\
                        <td width="228">平均客单价</td>\
                        <td width="339">buy_avg_order_pric</td>\
                        <td width="651">60天内：<br>\
                            购物订单总额［包括优惠券，宝券支付］／购物订单数量<br>\
                            输出： 精确到两位小数<br>\
                            如果60天内无购物则为：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">总下单次数</td>\
                        <td width="339">buy_order_count</td>\
                        <td width="651">60天内：<br>\
                            总下单且成功支付的次数</td>\
                        </tr>\
                        <tr>\
                        <td width="228">总购买金额</td>\
                        <td width="339">buy_order_sum</td>\
                        <td width="651">60天内：<br>\
                            购物订单总额［包括宝币，宝券，优惠券，购物卡等］<br>\
                            输出： 精确到两位小数<br>\
                            如果60天内无购物则为：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">总购买金额（宝币）</td>\
                        <td width="339">buy_baobi_sum</td>\
                        <td width="651">60天内：<br>\
                            购物订单总额［宝币］<br>\
                            输出： 精确到两位小数<br>\
                            如果60天内无购物则为：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">总购买金额（宝券）</td>\
                        <td width="339">buy_baoquan_sum</td>\
                        <td width="651">60天内：<br>\
                            购物订单总额［宝券］<br>\
                            输出： 精确到两位小数<br>\
                            如果60天内无购物则为：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">总购买金额（优惠券）</td>\
                        <td width="339">buy_coupon_sum</td>\
                        <td width="651">60天内：<br>\
                            购物订单总额［优惠券］<br>\
                            输出： 精确到两位小数<br>\
                            如果60天内无购物则为：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">总购买金额（购物卡）</td>\
                        <td width="339">buy_card_sum</td>\
                        <td width="651">60天内：<br>\
                            购物订单总额［购物卡］<br>\
                            输出： 精确到两位小数<br>\
                            如果60天内无购物则为：0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">最近一次支付日期</td>\
                        <td width="339">buy_last_date</td>\
                        <td width="651">60天内最近一次下购物订单，并且支付成功的时间： <br>\
                            格式：YYYY-mm-dd<br>\
                            如果无的话则输出为空</td>\
                        </tr>\
                        <tr>\
                        <td width="228">最近一次购买金额</td>\
                        <td width="339">buy_last_amount</td>\
                        <td width="651">60天内最近一次下购物订单，并且支付成功的订单金额，不包括优惠券和宝券<br>\
                            格式：xx.xx<br>\
                            如果无的话则输出为空</td>\
                        </tr>\
                        <tr>\
                        <td width="228">取消订单总次数</td>\
                        <td width="339">buy_refund_count</td>\
                        <td width="651">60天内成功支付购物订单未发货取消订单的次数<br>\
                            如果无退单，则为0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">退货总次数</td>\
                        <td width="339">buy_return_goods</td>\
                        <td width="651">60天内成功支付后且签收货物后退货的总次数<br>\
                            如果无退货，则为0</td>\
                        </tr>\
                        <tr>\
                        <td width="228">订单支付率</td>\
                        <td width="339">buy_payment_rate</td>\
                        <td width="651">60天内<br>\
                            订单范围： 购物订单<br>\
                            成功支付订单数量／［支付订单数量＋未支付订单数量］X 100％</td>\
                        </tr>\
                        <tr>\
                        <td width="228">绑定银行卡数</td>\
                        <td width="339">buy_card_count</td>\
                        <td width="651">目前绑定有效的银行卡数目，解绑的不算其中。<br></td>\
                        </tr>\
                        <tr>\
                        <td width="228">是否认证商家</td>\
                        <td width="339">seller_is_certifer</td>\
                        <td width="651">输出：    Y 或者 N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">商家历史最高等级</td>\
                        <td width="339">seller_history_level</td>\
                        <td width="651">输出：    等级编号 1，2，3，4，5.。</td>\
                        </tr>\
                        <tr>\
                        <td width="228">商家平均月销量</td>\
                        <td width="339">selller_sales_month</td>\
                        <td width="651">取一年内有效支付的订单数量／12    ，四舍五入到整数</td>\
                        </tr>\
                        <tr>\
                        <td width="85">　</td>\
                        <td width="228">商家平均月销量宝券占比</td>\
                        <td width="339">seller_rate_quan</td>\
                        <td width="651">一年内：    有效支付订单的宝券总额／有效支付订单宝券总额＋宝币总额＋优惠券总额＋购物卡总额       x 100%<br>\
                            输出例子：23,  12</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="2">分销任务</td>\
                        <td width="228">60天完成分销次数</td>\
                        <td width="339">commut_product_share_60</td>\
                        <td width="651">60天内做分销产品的次数<br>\
                            输出例子：99</td>\
                        </tr>\
                        <tr>\
                        <td width="228">60天分销产品平均保证金</td>\
                        <td width="339">　</td>\
                        <td width="651">60天内分销产品的保证金总额／60天做分销产品的次数<br>\
                            输出例子：989.88</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="10" width="84">上网行为</td>\
                        <td width="85">收藏</td>\
                        <td width="228">30天收藏次数</td>\
                        <td width="339">online_collect_count</td>\
                        <td width="651">30天内内收藏数量，输出整数</td>\
                        </tr>\
                        <tr>\
                        <td width="85">购物车</td>\
                        <td width="228">30天购物车次数</td>\
                        <td width="339">online_cart_count</td>\
                        <td width="651">30天内购物车产品总数量，输出整数</td>\
                        </tr>\
                        <tr>\
                        <td width="85">点赞</td>\
                        <td width="228">30天点赞次数</td>\
                        <td width="339">online_applaud_count</td>\
                        <td width="651">30天内点赞数量，输出整数</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="3" width="85">搜索</td>\
                        <td width="228">10天搜索关键字top10</td>\
                        <td width="339">online_search_key</td>\
                        <td width="651">10天内用户在首页搜索框和微商搜索框输入的关键字排重后按时间最近排序。<br>\
                            输出例子： 手机，短裙，手机壳，蜂蜜，电风扇。［关键字逗号分隔］<br>\
                            如果无搜索关键字，输出为空</td>\
                        </tr>\
                        <tr>\
                        <td width="228">10天搜索次数</td>\
                        <td width="339">online_search_count</td>\
                        <td width="651">10天内用户在首页搜索框和微商搜索框输入的关键字的搜索次数，包括搜索结果页选取筛选条件次数</td>\
                        </tr>\
                        <tr>\
                        <td width="228">10天搜索下单转化率</td>\
                        <td width="339">online_searh_rate</td>\
                        <td width="651">10天内从搜索详情页来的成功下单次数［搜索／热卖推荐／猜你喜欢］／10天搜索次数    X 100%<br>\
                            输出例子： 1.2%</td>\
                        </tr>\
                        <tr>\
                        <td width="85">活跃值</td>\
                        <td width="228">活跃值</td>\
                        <td width="339">online_active_score</td>\
                        <td width="651">与公司活跃值一致，输出整数    0－无穷大</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="3" width="85">时间</td>\
                        <td width="228">集中上网时段_1</td>\
                        <td width="339">base_time_net_1</td>\
                        <td width="651">前30天内网站访问集中的时间段，取整到半个小时一个区段，    top 1<br>\
                            0:00－1.00        编码1<br>\
                            1:01－2:00        编码2<br>\
                            。。。。<br>\
                            23:01－23:59:   编码24<br></td>\
                        </tr>\
                        <tr>\
                        <td width="228">集中上网时段_2</td>\
                        <td width="339">base_time_net_2</td>\
                        <td width="651">前30天内网站访问集中的时间段，取整到半个小时一个区段，    top 1<br>\
                            0:00－1.00        编码1<br>\
                            1:01－2:00        编码2<br>\
                            。。。。<br>\
                            23:01－23:59:   编码24<br></td>\
                        </tr>\
                        <tr>\
                        <td width="228">习惯签到时间段</td>\
                        <td width="339">base_sign_time</td>\
                        <td width="651">前30天内网站访问集中的时间段，取整到半个小时一个区段，    top 1<br>\
                            0:00－1.00        编码1<br>\
                            1:01－2:00        编码2<br>\
                            。。。。<br>\
                            23:01－23:59:   编码24<br></td>\
                        </tr>\
                        <tr>\
                        <td rowspan="10" width="84">　</td>\
                        <td width="85">　</td>\
                        <td width="228">优惠券使用／失效比［90天］</td>\
                        <td width="339">invest_coupon</td>\
                        <td width="651">90天内使用的各种优惠券数量／90天内过期或失效的各种优惠券数量    x  100％<br>\
                            输出例子： 33.33%<br></td>\
                        </tr>\
                        <tr>\
                        <td width="85">　</td>\
                        <td width="228">当天减持比率</td>\
                        <td width="339">invest_output_rate</td>\
                        <td width="651">当天资金提现总额/当天可提现金额＋各种保证金总额    X 100%<br>\
                            输出例子：0， 33%</td>\
                        </tr>\
                        <tr>\
                        <td width="85">　</td>\
                        <td width="228">当天追加资金比率</td>\
                        <td width="339">invest_input_rate</td>\
                        <td width="651">当天资金追加总额/当天可提现金额＋各种保证金总额    X 100%<br>\
                            输出例子：0， 33%</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="7" width="85">投资</td>\
                        <td width="228">是否购买退运险</td>\
                        <td width="339">invest_shippment_assurance</td>\
                        <td width="651">30天内是否购买退运险，只需有一次即可（退运险，只要购物就强制购买）<br>\
                            输出：Y or N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">是否自主购买保险</td>\
                        <td width="339">invest_assurance_buy</td>\
                        <td width="651">30天内是否购买除退运险意外的其他保险，如意外险,账户安全险，只需有一次即可<br>\
                            输出：Y or N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">是否订阅数据助手</td>\
                        <td width="339">invest_is_data_ass</td>\
                        <td width="651">当天否购买数据助手<br>\
                            输出：Y or N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">是否订阅账户安全险</td>\
                        <td width="339">invest_account_assure</td>\
                        <td width="651">当月是否购卖账户安全<br>\
                            输出：Y or N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">是否宝粉卡用户</td>\
                        <td width="339">invest_is_bcard</td>\
                        <td width="651">当天是宝粉卡用户<br>\
                            输出：Y or N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">是否订阅金戈盾</td>\
                        <td width="339">invest_is_jingedun</td>\
                        <td width="651">当天是否购买金戈盾<br>\
                            输出：Y or N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">45天总的投资回报率［宝币］</td>\
                        <td width="339">invest_rate_all</td>\
                        <td width="651">45天平均宝币回报［注册、充值、提现、推广，分销、资产所有奖励和回报］／45天平均宝币总资产    X 100%<br>\
                            输出例子： 5.90</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="13">娱乐</td>\
                        <td rowspan="3" width="85">有票</td>\
                        <td width="228">30天观看电影</td>\
                        <td width="339">leisure_film_30</td>\
                        <td width="651">30天观看电影场次<br>\
                            无观看输出为0<br>\
                            输出例子： 2</td>\
                        </tr>\
                        <tr>\
                        <td width="228">30天观看演出</td>\
                        <td width="339">leisure_scene_30</td>\
                        <td width="651">30天观看演出<br>\
                            无观看输出为0<br>\
                            输出例子： 2</td>\
                        </tr>\
                        <tr>\
                        <td width="228">最近30天门票购买</td>\
                        <td width="339">leisure_travel_30</td>\
                        <td width="651">最近30天门票成功支付次数<br>\
                            无购买输出为0<br>\
                            输出例子：3</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="8" width="85">q直播</td>\
                        <td width="228">最近30天做主播次数</td>\
                        <td width="339">leisure_show_times</td>\
                        <td width="651">最近30天做开播次数<br>\
                            输出例子：8</td>\
                        </tr>\
                        <tr>\
                        <td width="228">关注的主播数量</td>\
                        <td width="339">leisure_tv_follow_count</td>\
                        <td width="651">关注的主播数量<br>\
                            输出例子：9</td>\
                        </tr>\
                        <tr>\
                        <td width="228">30天q豆消费数</td>\
                        <td width="339">leisure_qdou_out</td>\
                        <td width="651">30天q豆消费数<br>\
                            &nbsp;输出例子：987</td>\
                        </tr>\
                        <tr>\
                        <td width="228">30天q豆充值数</td>\
                        <td width="339">leisure_qdou_count</td>\
                        <td width="651">30天q豆充值数<br>\
                            输出例子：987</td>\
                        </tr>\
                        <tr>\
                        <td width="228">30天收到的礼物次数</td>\
                        <td width="339">leisure_gift_count</td>\
                        <td width="651">30天收到的礼物次数<br>\
                            输出例子：7</td>\
                        </tr>\
                        <tr>\
                        <td width="228">今天粉丝总数量</td>\
                        <td width="339">leisure_tv_fans_all</td>\
                        <td width="651">直播粉丝总数量，不包括取消的<br>\
                            输出例子： 9</td>\
                        </tr>\
                        <tr>\
                        <td width="228">30天粉丝增长数量</td>\
                        <td width="339">leisure_fans_add</td>\
                        <td width="651">30天粉丝增长数量<br>\
                            输出例子：98</td>\
                        </tr>\
                        <tr>\
                        <td width="228">最近30天进入直播间次数</td>\
                        <td width="339">leisure_tv_watch_count</td>\
                        <td width="651">最近30天进入直播间次数<br>\
                            输出例子：9</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="2" width="85">人脉</td>\
                        <td width="228">累计推荐好友数</td>\
                        <td width="339">commut_present_count</td>\
                        <td width="651">开户以来成功邀请好友个数，包括解除关系好友<br>\
                            输出例子：33</td>\
                        </tr>\
                        <tr>\
                        <td width="228">90天内推荐好友数</td>\
                        <td width="339">commut_present_count_90</td>\
                        <td width="651">90天内成功邀请好友个数，包括解除关系好友<br>\
                            输出例子：33</td>\
                        </tr>\
                        <tr>\
                        <td rowspan="5" width="84">用户</td>\
                        <td rowspan="5" width="85">类型</td>\
                        <td width="228">初生型</td>\
                        <td width="339">user_type_0</td>\
                        <td width="651">范围：有效用户［不包括封号，黑名单用户］  AND<br>\
                            qbao 0&lt;注册时间&lt;30天  <br>\
                            输出：Y/N<br></td>\
                        </tr>\
                        <tr>\
                        <td width="228">成长型</td>\
                        <td width="339">user_type_1</td>\
                        <td width="651">范围：有效用户［不包括封号，黑名单用户］  AND<br>\
                            qbao 30&lt;注册时间&lt;60天  AND<br>\
                            注册以来，现金充值次数&gt;=1 <br>\
                            输出：Y/N<br></td>\
                        </tr>\
                        <tr>\
                        <td width="228">活跃型</td>\
                        <td width="339">user_type_2</td>\
                        <td width="651"><br>\
                            范围：有效用户［不包括封号，黑名单用户］  AND<br>\
                            30天内，签到次数大于20次 And<br>\
                            30天内， 分销任务＋广告任务&gt;=1 <br>\
                            输出：Y/N<br></td>\
                        </tr>\
                        <tr>\
                        <td width="228">沉默型</td>\
                        <td width="339">user_type_3</td>\
                        <td width="651">范围：有效用户［不包括封号，黑名单用户］  AND<br>\
                            qbao 注册时间&gt;30天<br>\
                            30天内，签到次数大于1次 And<br>\
                            30天内， 分销任务＋广告任务＝0 AND<br>\
                            30天内， 购物次数＋雷拍次数＝0<br>\
                            输出：Y/N</td>\
                        </tr>\
                        <tr>\
                        <td width="228">流失型</td>\
                        <td width="339">user_type_4</td>\
                        <td width="651">范围：有效用户［不包括封号，黑名单用户］  AND<br>\
                            qbao 注册时间&gt;40天  AND<br>\
                            40天资金提现总额／40平均总投资额［宝币总数＋各种保证金］&gt;＝90％[清仓阶段]<br>\
                            输出：Y/N<br></td>\
                        </tr>\
                        <tr>\
                        <td rowspan="2" width="84">时间</td>\
                        <td rowspan="2" width="85">时间</td>\
                        <td width="228">　</td>\
                        <td>dt</td>\
                        <td width="651">数据获取日期<br>\
                            格式：YYYY-mm-dd</td>\
                        </tr>\
                        <tr>\
                        <td width="228">　</td>\
                        <td>update</td>\
                        <td width="651">计算时间<br>\
                            格式：YYYY-mm-dd ：hh mm ss</td>\
                        </tr>\
                    </table>'
    }

}