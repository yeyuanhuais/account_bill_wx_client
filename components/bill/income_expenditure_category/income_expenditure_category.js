import { request } from "../../../http/request";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      observer: async function (newVal, oldVal) {
        this.getData(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classifications_data: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClick({ currentTarget }) {
      this.triggerEvent("categoryTap", { data: currentTarget.dataset.item });
    },
    /* ======== 获取列表数据 ======== */
    async getData(newVal) {
      let res = await request("/classifies/findAll", "GET", { type: newVal });
      if (!res) return;
      this.setData({ classifications_data: res });
    }
  }
});
