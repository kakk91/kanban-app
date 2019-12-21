// DOM操作でイベントをトリガー
exports.command = function (selector, value, keyCode) {
  return this.execute(function (selector, event, keyCode) {
    let e = document.createEvent('HTMLEvents')
    e.initEvent(event, true, true)
    if (keyCode) {
      e.keyCode = keyCode
    }
    document.querySelector(selector).dispatchEvent(e)
  }, [selector, event, keyCode])
}
