/**
 * @author: xiaoyu
 * @data: 2018-4-13
 * @des: 项目通用方法js库
 */
/**方法加入可引用列表 */
module.exports.showLoading = showLoading

function showLoading(title, mask) {
  wx.showLoading({
    title: title,
    mask: mask,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}

function hideLoading() {
  wx.hideLoading()
}

function showSingleToast(title, content, success) {
  wx.showModal({
    title: title,
    content: content,
    success: success
  })
}
