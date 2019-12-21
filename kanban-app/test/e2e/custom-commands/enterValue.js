// input要素等へのキーボード入力をエミュレーション
exports.command = function (selector, value) {
  return this.clearValue(selector).setValue(selector, value).trigger(selector, 'keyup', 13)
}
