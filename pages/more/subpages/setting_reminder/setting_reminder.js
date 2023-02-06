// pages/more/sub_page/setting_reminder/setting_reminder.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selected: [false, false, false], // 这里表示列表项是否展开，默认初始时此数组的元素全为fasle，表示都没展开
    active: null, // 当前展开的项的index值
    exam_time: [
      {
        value: "2019-05-07",
        考试时间: "13:00-14:30",
        name: "记账提醒",
        考试座位: "A201"
      },
      {
        value: "2019-05-07",
        考试时间: "13:00-14:30",
        name: "距离信用卡还款",
        考试座位: "A201"
      },
      {
        value: "2019-05-07",
        考试时间: "13:00-14:30",
        name: "距离房租还有",
        考试座位: "A201"
      }
    ]
  },
  show(e) {
    let index = e.currentTarget.dataset.index;
    let active = this.data.active;

    this.setData({
      [`selected[${index}]`]: !this.data.selected[`${index}`],
      active: index
    });

    // 如果点击的不是当前展开的项，则关闭当前展开的项
    // 这里就实现了点击一项，隐藏另一项
    if (active !== null && active !== index) {
      this.setData({ [`selected[${active}]`]: false });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {}
});
