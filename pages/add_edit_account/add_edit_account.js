import WxValidate from "../../utils/WxValidate";
import { request } from "../../http/request";
Page({
  data: {
    formData: { color: "rgb(7,193,96)", money: 0 },
    rules: [
      {
        name: "name",
        rules: { required: false, message: "账户名称必填" }
      },
      {
        name: "type_name",
        rules: { required: true, message: "账户类型是必选项" }
      },
      {
        name: "money",
        rules: { required: true, message: "请输入金额" }
      },
      {
        name: "color",
        rules: { required: true, message: "选择账户颜色" }
      }
    ]
  },
  async formSubmit({ detail: { value } }) {
    let { formData } = this.data;
    // 验证字段的规则
    const rules = {
      name: {
        required: true
      },
      type_name: {
        required: true
      },
      money: {
        required: true,
        number: true
      },
      color: {
        required: true
      }
    };

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      name: {
        required: "请输入账户名称"
      },
      type_name: {
        required: "请返回上级选择账户类型"
      },
      money: {
        required: "请输入金额"
      },
      color: {
        required: "请选择账户颜色"
      }
    };

    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages);

    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(value)) {
      const error = this.WxValidate.errorList[0];
      wx.showToast({
        icon: "none",
        title: error.msg
      });
      return false;
    }

    let res = await request("/assets/create", "POST", { ...value, show: 1 });
    console.log("%c res", "font-size:13px; background:pink; color:#bf2c9f;", res);
    res && wx.redirectTo({ url: "/pages/property/property" });
  },
  formReset() {
    let { formData } = this.data;
    this.setData({
      formData: { ...formData, type_name: formData.type_name, typeId: formData.typeId, color: "rgb(7,193,96)", money: 0 }
    });
  },
  onLoad(options) {
    let { formData } = this.data;
    const eventChannel = this.getOpenerEventChannel();
    console.log("%c eventChannel", "font-size:13px; background:pink; color:#bf2c9f;", eventChannel);
    eventChannel &&
      eventChannel.on("accountType", data => {
        this.setData({ formData: { ...formData, ...data } });
      });
  },
  submitForm() {
    this.selectComponent("#form").validate((valid, errors) => {
      console.log("valid", valid, errors);
      if (!valid) {
        const firstError = Object.keys(errors);
        if (firstError.length) {
          this.setData({
            error: errors[firstError[0]].message
          });
        }
      } else {
        wx.showToast({
          title: "校验通过"
        });
      }
    });
  }
});
