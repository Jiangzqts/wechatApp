var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
Page({
  data: {
    // text:"这是一个页面"
    list: [],
    dd: '',
    hidden: false,
    page: 1,
    size: 20,
    hasMore: true,
    hasRefesh: false,
    movies: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]

  },
  onLoad: function (options) {
    var that = this;
    var url = "https://www.apiopen.top/satinGodApi?type=1&page=1";
    wx.getSystemInfo({
      success: (res) => { // 用这种方法调用，this指向Page
        this.setData({
          winH: res.windowHeight
        });
      }
    });
    network_util._get(url,
      function (res) {
        that.setData({
          list: res.data.data,
          hidden: true,
        });
      }, function (res) {
        console.log(res);
      });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //点击事件处理
  bindViewTap: function (e) {
    console.log(e.currentTarget.dataset.title);
    wx.navigateTo({
      url: '../detail/detail?title=' + e.currentTarget.dataset.title,
    })
  },
  //加载更多
  loadMore: function (e) {
    var that = this;
    that.setData({
      hasRefesh: true,
      hasMore: true,
    });
    // if (!this.data.hasMore) return
    var url = 'https://www.apiopen.top/satinGodApi?type=1&page=' + (++that.data.page);
    network_util._get(url,
      function (res) {
        that.setData({
          list: that.data.list.concat(res.data.data),
          hidden: true,
          hasRefesh: false,
        });
      }, function (res) {
        console.log(res);
      })

  },
  //刷新处理
  refesh: function (e) {
    var that = this;
    that.setData({
      hasRefesh: true,

    });
    var url = 'https://www.apiopen.top/satinGodApi?type=1&page=1';
    network_util._get(url,
      function (res) {
        that.setData({
          list: res.data.data,
          hidden: true,
          page: 1,
          hasRefesh: false,
        });
      }, function (res) {
        console.log(res);
      })

  },
  onShareAppMessage: function () {
    return {
      title: '微信小程序联盟',
      desc: '最具人气的小程序开发联盟!',
      path: '../index/index'
    }
  }
  ,
})