import { request } from "../../http/request";
Page({
  /**
   * 页面的初始数据
   */
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
    ],
    classifications_data: [],
    formData: {},
    dialogVis: false,
    slideButtons: [{ text: "编辑" }, { text: "删除", type: "warn" }],
    activeTab: 0
  },

  /* ======== 添加 ======== */
  add({
    currentTarget: {
      dataset: { type }
    }
  }) {
    this.setData({
      dialogVis: true,
      formData: { title: `添加${type === 1 ? "收入" : "支出"}分类`, type }
    });
  },

  /* ======== 点击选中icon ======== */
  tapIcon({ detail: { icon } }) {
    const { formData } = this.data;
    this.setData({ formData: { ...formData, icon } });
  },
  /* ======== 分类名称输入 ======== */
  inputName({ detail: { value } }) {
    const { formData } = this.data;
    this.setData({ formData: { ...formData, name: value } });
  },
  /* ======== 关闭弹框 ======== */
  cancel() {
    this.setData({ dialogVis: false, formData: {} });
  },
  /* ======== 提交添加编辑数据 ======== */
  async submit() {
    const { formData, activeTab } = this.data;
    const url = formData._id ? `/classifies/update/${formData._id}` : "/classifies/create";
    const method = formData._id ? "PUT" : "POST";
    let res = await request(url, method, { ...formData });
    if (!res) return;
    this.setData({ dialogVis: false, formData: {} }, () => {
      this.getData(activeTab + 1);
    });
  },
  /* ======== 获取列表数据 ======== */
  async getData(type = 1) {
    let res = await request("/classifies/findAll", "GET", { type });
    if (!res) return;
    this.setData({ classifications_data: res });
  },
  /* ======== 右滑操作 ======== */
  async slideButtonTap({
    currentTarget: {
      dataset: { item, type }
    },
    detail: { index }
  }) {
    if (index === 0) {
      this.setData({
        dialogVis: true,
        formData: {
          ...item,
          title: `编辑${type === 1 ? "收入" : "支出"}分类`,
          type
        }
      });
    } else if (index === 1) {
      let res = await request(`/classifies/remove/${item._id}`, "DELETE");
      if (!res) return;
      this.getData(this.data.activeTab + 1);
    }
  },
  /* ======== tab点击 ======== */
  onTabClick({ detail: { index } }) {
    this.setData({ activeTab: index });
    this.getData(index + 1);
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
  onShow() {
    this.getData();
  },

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
