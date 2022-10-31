// components/property/half_screen_dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    accountData: Array,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /* ======== 弹窗关闭 ======== */
    close() {
      this.triggerEvent("close", {});
    },
    /* ======== 账户多选框点击事件 ======== */
    checkboxChange(e) {
      let { accountData } = this.properties;
      let data = e.detail.value;
      let newAccountData = accountData.map(item => {
        if (data.includes(item.id)) {
          item.value = 1;
        } else {
          item.value = 0;
        }
        return item;
      });
      this.triggerEvent("checkboxChange", { newAccountData });
    },
  },
});
