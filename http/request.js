let env = wx.getAccountInfoSync().miniProgram.envVersion;
const { baseUrl } = env === "develop" ? require("./env.js").dev : require("./env.js").prod;
module.exports = {
  // 二次封装wx.request
  // {String }url:请求的接口地址
  // {String} method:请求方式 GET,POST....
  // {Object} data:要传递的参数
  request: (url, method, data) => {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: "正在加载中...",
        mask: true
      });
      let token = wx.getStorageSync("user")?.token;
      let _url = `${baseUrl}${url}`;
      wx.request({
        url: _url,
        data: data,
        method: method,
        header: {
          "content-type": "application/json",
          Authorization: `Bearer ${token || ""}`
        },
        success: ({ data }) => {
          wx.hideLoading();
          if (data.code === 401 || data.statusCode === 401) {
            wx.setStorageSync("user", null);
            wx.switchTab({
              url: "/pages/more/more",
            });
            wx.showToast({
              title: "请登录",
              icon: "error",
              duration: 2000,
              mask: true
            });
          } else if (data.code !== 0) {
            wx.showToast({
              title: data.message,
              icon: "none",
              duration: 2000,
              mask: true
            });
            return false;
          }
          resolve(data.data || true);
        },
        fail: error => {
          console.log("%c error", "font-size:13px; background:pink; color:#bf2c9f;", error);
          wx.hideLoading();
          reject(error);
        }
      });
    });
  }
};
