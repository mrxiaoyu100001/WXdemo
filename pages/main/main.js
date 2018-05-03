// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [],
    isShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // wx.setNavigationBarTitle({
    //   title: '首页',
    // })
    wx.request({
      url: 'https://api.it120.cc/tz/shop/goods/list?categoryId=&nameLike=',
      data: {
        categoryId: '',
        nameLike: ''
      },
      success: function (response) {
        console.log(response.data)
        // var goods = []
        // for (var i = 0; i < response.data.data.length; i++) {
        //   goods.push(response.data.data[i]);
        // }
        that.setData({
          goods: response.data.data
        })
      }
    })
  },

  onBlance: function () {
    wx.navigateTo({
      url: '../../pages/shoplist/index',
    })
  },
  onShopping: function () {
    var that = this;
    that.setData({
      isShow: true
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.setData({
      isShow: false
    })
  },
  onItemClick: function(e) {
    console.log('backgroundClick', e)
    console.log('id', e.target.dataset.id)
    wx.navigateTo({
      url: '/pages/details/index',
    })
  }
})