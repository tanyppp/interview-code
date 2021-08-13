/**
 * 1、dns解析
 *    输入域名
 *    查找浏览器缓存
 *    本地hosts文件
 *    本地路由器
 *    向上路由查找
 *    城市dns服务器
 *    全局dns服务器
 * 找到后，依次返回，并进行 ip -> 域名 映射的缓存
 *
 * 2、五层网络模型
 *    应用层  http协议、dns协议
 *    运输层  tcp协议（等待响应）、udp协议（不等待响应）
 *    网络层  ip协议
 *    数据链路层  mac地址协议
 *    物理层
 *
 * 3、http协议
 *    Response
 *    http版本 状态码 状态码描述
 *    其他的key: value
 *
 *    Request
 *    请求方式（GET/POST...） 请求路径（/path?a=1） http版本
 *    其他的key: value
 *
 * 4、get和post的区别
 *    如果没有任何前提
 *    答：没有什么区别
 *    如果依据RFC（Request for Comment）规范
 *    1、理论上
 *    答：只是有语义上的区别，get表示拉取，post表示推送
 *    2、根据各浏览器规范
 *    答：1、get表现在url参数上，post表示在RequestBody上
 *       2、get的大小限制为512kb，post没有大小限制
 *       3、get的参数依据ASCII编码，post没有限制，可发二进制
 *       4、get的http内容格式需要为application/x-www-form-url，post没有限制
 *       5、get请求可以被收藏，post不可以
 *
 * 5、cookie和session
 *    1、cookie保存在客户端，session保存在服务端
 *    2、cookie的缺点：复制滥用
 *    3、session的缺点：需要为每一个用户存一个session
 */
