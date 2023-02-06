Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: "pages/property/property",
        text: "资产",
        icon: "baryinhangka",
      },
      {
        pagePath: "pages/report/report",
        text: "报表",
        icon: "barshujutongji",
      },
      {
        pagePath: "pages/bill/bill",
        text: "账单",
        icon: "bargenjinjilu",
      },
      {
        pagePath: "pages/more/more",
        text: "更多",
        icon: "bargengduo",
      },
    ],
  },

  methods: {
    handleClick({
      currentTarget: {
        dataset: { path, index },
      },
    }) {
      wx.switchTab({ url: `/${path}` });
      this.setData({ selected: index });
    },
    jump() {
      wx.navigateTo({ url: "/pages/add_edit_bill_record/add_edit_bill_record" });
    },
  },
});
