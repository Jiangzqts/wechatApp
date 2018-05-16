# 小程序入门资料整理
### 1.0 前期准备
1.0 开发账号注册按照文档（https://developers.weixin.qq.com/miniprogram/dev/index.html） 不在叙述

``` 注意：1. 注册成功之后，需要到开发设置页面注册服务器域名 例如人民日报    http://app.peopleapp.com <br> 2.记住AppID ```

2.0 开发工具下载( https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018515 )

``` 提示:第一步小程序后台设置好服务器域名之后,需要到开发工具 详情->域名信息 刷新一下后台设置的域名信息 ```

3.0 创建小程序以及预览
-    新建项目选择小程序项目，选择代码存放的硬盘路径，填入刚刚申请到的小程序的 AppID，给你的项目起一个好听的名字，最后，勾选 "创建 QuickStart 项目" (注意: 你要选择一个空的目录才会有这个选项)，点击确定，你就得到了你的第一个小程序了，点击顶部菜单编译就可以在 IDE 预览你的第一个小程序。<
-    点击工具上的编译按钮，可以在工具的左侧模拟器界面看到这个小程序的表现，也可以点击预览按钮，通过微信的扫一扫在手机上体验你的第一个小程序。
   
4.0 代码构成


- app.json 是对当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。

```
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
}
- pages:所有小程序的页面都需要到app.json配置
- windows:全局的头部信息字体，标题，颜色...,也可以到具体某个页面的json文件下配置,会覆盖app.json的配置

```

- app.js 是注册全局的唯一的一个app实例，注册之后可以在每个页面中获取到app的实例
- app.wxss 微信特有的样式文件在css的基础上添加了某些功能
- project.config.json  个人觉得相当于Android Studio里面export settings功能类似
- pages/index目录下包含[index.js&nbsp; index.json&nbsp;  index.wxml &nbsp;  index.wxss ] 其中.js  .wxml  .wxss 不在多叙述; ``` index.json可以设置当前页面的标题颜色 title背景等等 ```
### 2.0简单代码演示
1：简单text演示
```
detial.wxml

<view>
  <text>{{title}}</text>
</view>


```
detail.js
```

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "你好"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      { title: options.title },
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
```

    
2：列表  
布局文件如下
```
<scroll-view scroll-y="true" enable-back-to-top="true" style="height: {{winH}}px;">
 
  <view class='liveList' wx:for="{{list}}" wx:for-item="item">
    <view class='live-item' bindtap='bindViewTaps' data-title="{{item.text}}">
      <image mode='scaleToFill' style="width:100%;height:200px;" src="{{item.live_image}}"></image>
      <text id='type'>直播</text> <text id='num'>1525参与</text>
    </view>
  </view>

</scroll-view>
```
js文件 因为接口不能用所以写死的list数据
```
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
     {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201803/rmrb_35931520237337.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201803/rmrb_28251520234285.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201711/rmrb_11801512011894.gif"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201805/rmrb_66171525314179.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/seminar_img/201804/rmrb_84621523258036.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201804/rmrb_81831523329083.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",

      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201804/rmrb_21981523261156.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201804/rmrb_76391522836959.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/image/201803/rmrb_69441520320389.png?x-oss-process=style/w7"
  },
  {
      "title": "赵丽颖手捧鲜花为经纪人庆生",
      "live_image": "http://rmrbtest-image.peopleapp.com/upload/seminar_img/201803/rmrb_57791520408178.png?x-oss-process=style/w7"

  }
     
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var url="";
    wx.getSystemInfo({
      success: function(res) {
        success:res=>{
          this.setData({
            winH: res.windowHeight
          }
          )
        }
      },
    });
    // network_util._get(url,function(res){
    //   that.setData({
    //     list: res.data.data
    //   })
    // },function(rew){
    //   console.log(res);
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**用户点击 */
  bindViewTaps: function(e){
    wx.navigateTo({
      url: '../play/play?title=' + "啦啦啦",
    })
  }
})
```
以上是个人用于熟悉写法的案例，具体api和组件到小程序官网学习（https://developers.weixin.qq.com/miniprogram/dev/component/）

### 3.0提交审核
1. 当开发完小程序之后,点击IDE右上角的上传,填写好之后等待上传。
2. 上传成功之后，到小程序后台开发管理中将开发版本设置成体验版本
3. 将上传以后的小程序设置成体验版本之后可以提交审核
4. 审核成功发布  

### 4.0技术栈
1. html+css+js
2. ES5  or ES6
3. wepy、Labrador、wxapp-devFrame开发框架
### 5.0开源资料
1. https://github.com/opendigg/awesome-github-wechat-weapp
2. https://github.com/Jiangzqts/wechatApp（个人练习参考资料）





   
