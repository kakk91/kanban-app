const bodyParser = require('body-parser')

// 'Express'アプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
    // HTTPリクエストのbodyをJSONとして解析するようミドルウェアをインストール
    app.use(bodyParser.json())

    // TODO API実装
}