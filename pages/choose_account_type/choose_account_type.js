// pages/choose_account_type/choose_account_type.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    accountOptions: [
      {
        id: 1,
        name: "资产账户",
        children: [
          {
            id: 1,
            name: "现金",
            icon: "icon-xianjin",
            dec: ""
          },
          {
            id: 2,
            name: "储蓄卡",
            icon: "icon-yinhangka",
            dec: ""
          },
          {
            id: 3,
            name: "支付宝",
            icon: "icon-zhifubao",
            dec: ""
          },
          {
            id: 4,
            name: "微信钱包",
            icon: "icon-weixin",
            dec: ""
          },
          {
            id: 5,
            name: "储值卡",
            icon: "icon-yinhangqia",
            dec: ""
          },
          {
            id: 6,
            name: "收账",
            icon: "icon-shoukuan",
            dec: "别人欠的钱"
          }
        ]
      },
      {
        id: 2,
        name: "负债账户",
        children: [
          {
            id: 7,
            name: "信用卡",
            icon: "icon-salary",
            dec: ""
          },
          {
            id: 8,
            name: "蚂蚁花呗",
            icon: "icon-mayihuabei",
            dec: ""
          },
          {
            id: 9,
            name: "京东白条",
            icon: "icon-jingdongbaitiao",
            dec: ""
          },
          {
            id: 10,
            name: "欠账",
            icon: "icon-qiankuan",
            dec: "欠别人的钱"
          }
        ]
      }
    ]
  },
  /* ======== 点击类型 并跳转路由 ======== */
  chooseType({
    currentTarget: {
      dataset: { item, asset_type }
    }
  }) {
    wx.navigateTo({
      url: "/pages/add_edit_account/add_edit_account",
      success: res => {
        res.eventChannel.emit("accountType", { type: item.id, type_name: item.name, icon: item.icon, asset_type });
      }
    });
  }
});
