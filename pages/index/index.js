Page({
  data: {
    result: "",
    flag: true,
    a: '',
    b: '',
    c: '',
  },
  triangle: function (e) {
    console.log(e)
    if (!e || !e.detail || !e.detail.value) return;
    let s;
    let a = parseFloat(e.detail.value.a);
    let b = parseFloat(e.detail.value.b);
    let c = parseFloat(e.detail.value.c);
    console.log(`a=${a}, b=${b}, c=${c} ${this.data.a}`);
    if (isNaN(a) || isNaN(b) || isNaN(c)) return this.setData({
      flag: false,
      result: "无效输入"
    });
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
      var p = (a + b + c) / 2
      s = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2)
    } else {
      s = "您输入的三边不能构成三角形。"
    }
    this.setData({
      flag: false,
      result: s
    });
  }
})