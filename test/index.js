/**
 * Created by ference on 2017/4/8.
 */

var path = require('path');
var fs = require('fs');
var Alipay = require('../lib/alipay');

var outTradeId = Date.now().toString();


var ali = new Alipay({
    appId: '2016080300159077',
    notifyUrl: 'http://www.iobox.me/callback/alipay',
    rsaPrivate: fs.readFileSync(path.resolve('./pem/sandbox_iobox_private.pem'), 'utf-8'),
    rsaPublic: fs.readFileSync(path.resolve('./pem/sandbox_ali_public.pem'), 'utf-8'),
    sandbox: true,
    signType: 'RSA',
    openLog: true
});

ali.query({
    outTradeId: outTradeId
}).then(function (ret) {
    console.log("***** ret.body=" + ret.body);
});

ali.close({
    outTradeId: outTradeId
}).then(function (ret) {
    console.log("***** ret.body=" + ret.body);
});


ali.refund({
    outTradeId: outTradeId,
    operatorId: 'XX001',
    refundAmount: '2.01',
    refundReason: '退款'
}).then(function (ret) {
    console.log("***** ret.body=" + ret.body);
});


ali.billDownloadUrlQuery({
    billType: 'trade',
    billDate: '2017-03'
}).then(function (ret) {
    console.log("***** ret.body=" + ret.body);
});
