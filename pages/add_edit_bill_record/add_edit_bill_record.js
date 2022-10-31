import { request } from "../../http/request";
Page({
  data: {
    tabsData: [
      {
        title: "收入",
        id: 1
      },
      {
        title: "支出",
        id: 2
      }
    ], //资产数据
    activeTab: 0, //当前tabs值
    formData: { bill_value: "0", time: "2022-09-05", remark: "", icon: "", name: "" },
    dialogVis: false, //半屏弹框是否显示
    array: ["微信", "支付宝", "钱包", "银行卡"],
    activeTab: 0
  },

  /* ======== tab点击 ======== */
  onTabClick({ detail: { index } }) {
    this.setData({ activeTab: index });
  },

  categoryTap({ detail: { data } }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, ...data }
    });
  },
  /* ======== 键盘点击确定 ======== */
  async handleSubmitKeyboard({
    detail: {
      data: { value }
    }
  }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, bill_value: value }
    });
    if (value.indexOf("+") > -1 || value.indexOf("-") > -1) {
    } else {
      let res = await request("/classifies/findAll", "GET", {});
      if (!res) return;
    }
  },
  bindinputMoney({ detail }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, bill_value: detail.value }
    });
  },
  bindinputRemark({ detail }) {
    const { formData } = this.data;
    this.setData({
      formData: { ...formData, remark: detail.value }
    });
  },
  catchtapInput() {
    wx.hideKeyboard();
  },
  /* ======== 弹窗打开 ======== */
  openDialog() {
    this.setData({
      dialogVis: true
    });
  },
  /* ======== 弹窗关闭  选择展示账户点击确定 ======== */
  close() {
    this.setData({
      dialogVis: false
    });
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    });
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
