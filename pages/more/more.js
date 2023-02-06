import { request } from "../../http/request";
Page({
  data: {
    user_info: {}
  },
  onLoad() {
    const user = wx.getStorageSync("user");
    if (user) {
      this.setData({
        user_info: { account: user.account, avatar_url: user.avatar_url }
      });
    } else {
      this.setData({
        user_info: null
      });
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: "登录用户信息", // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        const { nickName, avatarUrl } = res.userInfo;
        // 登录
        wx.login({
          success: async value => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            let res = await request("/users/wxLogin", "POST", { code: value.code, login_method: "weixin", account: nickName, avatar_url: avatarUrl });
            this.setData({
              user_info: { account: res.account, avatar_url: res.avatar_url }
            });
            wx.setStorageSync("user", res);
          }
        });
      }
    });
  },
  /* ======== 退出 ======== */
  logout() {
    wx.removeStorageSync("user");
    this.setData({
      user_info: null
    });
  },
  onShow() {
    this.getTabBar().setData({ selected: 3 });
  }
});
