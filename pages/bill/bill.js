// pages/bill/bill.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    billData: [
      {
        time: "2022",
        type: "year",
        children: [
          {
            time: "8",
            type: "month",
            income: "345345",
            expenditure: "3233",
            children: [
              { time: "30", type: "day", income: "345345", expenditure: "3233" },
              { time: "29", type: "day", income: "345345", expenditure: "3233" },
              { time: "28", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
            ],
          },
          {
            time: "7",
            type: "month",
            income: "345345",
            expenditure: "3233",
            children: [
              {
                time: "30",
                type: "day",
                income: "345345",
                expenditure: "3233",
                children: [
                  { icon: "30", name: "交通", type: "day", income: "345345" },
                  { icon: "29", name: "交通", type: "day", expenditure: "3233" },
                  { icon: "28", name: "交通", type: "day", income: "345345" },
                  { icon: "27", name: "交通", type: "day", income: "345345" },
                  { icon: "27", name: "交通", type: "day", expenditure: "3233" },
                ],
              },
              { time: "29", type: "day", income: "345345", expenditure: "3233" },
              { time: "28", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
              { time: "27", type: "day", income: "345345", expenditure: "3233" },
            ],
          },
        ],
      },
    ],
  },
  onShow() {
    this.getTabBar().setData({ selected: 2 });
  },
});
