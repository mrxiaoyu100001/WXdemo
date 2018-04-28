// pages/welcome/welcome.js

const app = getApp()

Page({

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  
  onReady: function () {
       setTimeout(function () {
      // wx.redirectTo({
      //   url: '/pages/login/login'
      // })
      wx.switchTab({
        url: '/pages/main/main',
      });
    }, 1000)
  }
})