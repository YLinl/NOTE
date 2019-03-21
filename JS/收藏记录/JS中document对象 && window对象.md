# JS中document对象 && window对象

**参考链接:**  
[JS中document对象 && window对象](https://blog.csdn.net/qq_33242126/article/details/80313489)  
[Window及document对象](https://www.cnblogs.com/wolfocme110/p/5792830.html)

**区别:**  
* 1、window 指窗体。Window 对象表示浏览器中打开的窗口。document指页面。document是window的一个子对象、一个对象属性。  
* 2、用户不能改变 document.location(因为这是当前显示文档的位置)。
     但是,可以改变window.location (用其它文档取代当前文档)  
     window.location本身也是一个对象, 而document.location不是对象。

>1、window：代表浏览器中一个打开的窗口。它是一个顶层对象，而不是另一个对象的属性。  
>2、document对象：代表整个HTML 文档，可用来访问页面中的所有元素

## Window及document对象

> 注:页面上元素name属性以及JavaScript引用的名称必须一致包括大小写,否则会提示你1个错误信息 "引用的元素为空或者不是对象"

## 一、Window对象  
　　-------------------------------------------------- -------------------  
　　**对象属性**  
　　window  　　　//窗户自身  
　　window.self   　　//引用本窗户window=window.self  
　　window.name //为窗户命名  
　　window.defaultStatus //设定窗户状态栏信息  
　　window.location //URL地址，配备布置这个属性可以打开新的页面  
　　-------------------------------------------------- -------------------  
　　对象方法  
　　window.alert("text") 　　　　//提示信息会话框  
　　window.confirm("text")　　 //确认会话框  
　　window.prompt("text")　　 //要求键盘输入会话框  
　　window.setIntervel("action",time) 　　//每一隔指定的时间(毫秒)就执行一次操作  
　　window.clearInterval() 　　//清除时间配备布置作用就是终止轮回  
　　window.setTimeout(action,time) 　　//隔了指定的时间(毫秒)执行一次操作  
　　window.open() 　　//打开新的窗户  
　　window.close() 　　//关闭窗户  
　　-------------------------------------------------- -------------------  
　　成员对象  
　　window.event  
　　window.document 　　//见document对象详解  
　　window.history  
　　window.screen  
　　window.navigator  
　　window.external  
　　-------------------------------------------------- -------------------  
　　window.history对象  
　　window.history.length 　　//浏览过的页面数  
　　history.back()　　 //撤退退却  
　　history.forward() 　　//进步  
　　history.go(i)　　 //前进或头退到历史记录的第i个页面  
　　//i>0进步,i<0撤退退却  
　　-------------------------------------------------- -------------------  
　　window.screen对象  
    window.screen.width　　 //屏幕宽度  
　　window.screen.height 　　//屏幕高度  
　　window.screen.colorDepth 　　//屏幕色深  
　　window.screen.availWidth 　　//可用宽度  
　　window.screen.availHeight　　 //可用高度(除去任务栏的高度)  
　　-------------------------------------------------- -------------------  
　　window.external对象  
　　window.external.AddFavorite("地址","标题" ) //把网站新增到保藏夹  
　　-------------------------------------------------- -------------------  
　　window.navigator对象  
　　window.navigator.appCodeName 　　//浏览器代码名  
　　window.navigator.appName　　 //浏览器步伐名  
　　window.navigator.appMinorVersion 　　//浏览器补钉版本  
　　window.navigator.cpuClass 　　//cpu类型 x86  
　　window.navigator.platform 　　//操作体系类型 win32  
　　window.navigator.plugins  
　　window.navigator.opsProfile  
　　window.navigator.userProfile  
　　window.navigator.systemLanguage 　　//客户体系语言 zh-cn简体中文  
　　window.navigator.userLanguage 　　//用户语言,同上  
　　window.navigator.appVersion 　　//浏览器版本(包括 体系版本)  
　　window.navigator.userAgent  
　　window.navigator.onLine 　　//用户否在线  
　　window.navigator.cookieEnabled 　　//浏览器是否撑持cookie  
　　window.navigator.mimeTypes  
　　==================================================  

### 二、document对象  

对象属性:  
document.title    　　             //设置文档标题等价于HTML的`<title>`标签  
document.bgColor     　　          //设置页面背景色  
document.fgColor       　　        //设置前景色(文本颜色)  
document.linkColor      　　       //未点击过的链接颜色  
document.alinkColor    　　        //激活链接(焦点在此链接上)的颜色  
document.vlinkColor     　　       //已点击过的链接颜色  
document.URL            　　       //设置URL属性从而在同一窗口打开另一网页  
document.fileCreatedDate 　　      //文件建立日期，只读属性  
document.fileModifiedDate 　　     //文件修改日期，只读属性  
document.fileSize        　　      //文件大小，只读属性  
document.cookie         　　       //设置和读出cookie  
document.charset    　　           //设置字符集 简体中文:gb2312  
　

常用对象方法  

document.write()                  　　    //动态向页面写入内容  
document.createElement(Tag)        　　   //创建一个html标签对象  
document.getElementById(ID)      　　     //获得指定ID值的对象  
document.getElementsByName(Name)   　　   //获得指定Name值的对象  
document.body.appendChild(oTag)  

body-主体子对象  

document.body            　　       //指定文档主体的开始和结束等价于`<body></body>`
document.body.bgColor   　　        //设置或获取对象后面的背景颜色  
document.body.link        　　      //未点击过的链接颜色  
document.body.alink      　　       //激活链接(焦点在此链接上)的颜色  
document.body.vlink       　　      //已点击过的链接颜色  
document.body.text       　　       //文本色  
document.body.innerText   　　      //设置`<body>...</body>`之间的文本  
document.body.innerHTML    　　     //设置`<body>...</body>`之间的HTML代码  
document.body.topMargin     　　    //页面上边距  
document.body.leftMargin    　　    //页面左边距
document.body.rightMargin       　　//页面右边距
document.body.bottomMargin    　　  //页面下边距
document.body.background       　　 //背景图片
document.body.appendChild(oTag) 　　//动态生成一个HTML对象  
常用对象事件

document.body.onclick="func()"   　　           //鼠标指针单击对象是触发
document.body.onmouseover="func()"    　　      //鼠标指针移到对象时触发
document.body.onmouseout="func()"  　　         //鼠标指针移出对象时触发
location-位置子对象
document.location.hash    　　      // #号后的部分
document.location.host   　　       // 域名+端口号
document.location.hostname  　　    // 域名
document.location.href       　　   // 完整URL
document.location.pathname   　　   // 目录部分
document.location.port    　　      // 端口号
document.location.protocol  　　    // 网络协议(http:)
document.location.search   　　     // ?号后的部分  

常用对象事件  

document.location.reload()    　　      //刷新网页  
document.location.reload(URL)    　　   //打开新的网页  
document.location.assign(URL)     　　  //打开新的网页  
document.location.replace(URL)     　　 //打开新的网页  
`========================================================================` 

selection-选区子对象  

document.selection  

`========================================================================`

## images集合(页面中的图象):  

a)通过集合引用  
document.images             　　    //对应页面上的<img>标签  
document.images.length      　　    //对应页面上<img>标签的个数  
document.images[0]       　　       //第1个<img>标签  
document.images[i]      　　        //第i-1个<img>标签  
 
b)通过nane属性直接引用
<img name="oImage">
document.images.oImage          //document.images.name属性  
 
c)引用图片的src属性
document.images.oImage.src      //document.images.name属性.src  
 
d)创建一个图象  
var oImage  
oImage = new Image()  
document.images.oImage.src="1.jpg"  
同时在页面上建立一个<img>标签与之对应就可以显示  
 
示例代码(动态创建图象)： 

```html
<html>
<img name=oImage>
<script language="javascript">
       var oImage
       oImage = new Image()
       document.images.oImage.src="1.jpg"
</script>
</html>

<html>
<script language="javascript">
       oImage=document.caeateElement("IMG")
       oImage.src="1.jpg"
</script>
```