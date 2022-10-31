// components/property/account_color/account_color.js
Component({
  behaviors: ["wx://form-field"],
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    pick: false,
    value: "rgb(7,193,96)"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toPick() {
      this.setData({
        pick: true
      });
    },
    pickColor({ detail: { color } }) {},
    onChange: function (e) {
      this.setData({
        value: e.detail.value
      });
    }
  }
});
