// pages/login/login.js
// const common = require('../../utils/common.js')
import common from '../../utils/common.js'
//获取应用实例
const app = getApp()

Page({
  /**
   * @account: 帐号
   * @password：密码
   */
  login: function () {
    common.showLoading('加载', true)
    wx.request({
      url: app.globalData.baseUrl + app.globalData.loginIn,
      method: 'POST',
      data: {
        account: '13241800853',
        password: '123456'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        console.log(res.data)
      },
      fail: function (e) {
        wx.hideLoading()
        console.log(e)
        wx.setStorage({
          key: 'shopsName',
          data: '美农测试',
        })
        wx.switchTab({
          url: '/pages/main/main',
        });
      }
    })
  },
  /**
   * 忘记密码
   */
  forget: function () {
    wx.showModal({
      title: '',
      content: '请联系后台管理员重置密码',
      showCancel: false,
      confirmColor: "#ff0000",
      success: function (response) {
        if (response.confirm) {

        }
      }
    })
  }
})