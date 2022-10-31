import { request } from "../../http/request";
Page({
  data: {
    tabsData: [], //资产数据
    activeTab: 0 //当前tabs值
  },
  /* ======== tab点击 ======== */
  onTabClick({ detail: { index } }) {
    this.setData({ activeTab: index });
    this.getData(index + 1);
  },
  /* ======== 获取列表数据 ======== */
  async getData(asset_type = 1) {
    let { tabsData, activeTab } = this.data;
    let res = await request("/assets/findAll", "GET", { asset_type });
    if (!res) return;
    this.setData({ tabsData: res });
  },
  /* ======== 账户多选框点击事件 ======== */
  checkboxChange({ detail }) {
    let { tabsData, activeTab } = this.data;
    tabsData[activeTab].childData = detail.childData;
    this.setData({
      tabsData
    });
  },
  onShow() {
    this.getTabBar().setData({ selected: 0 });
    this.getData();
  }
});
