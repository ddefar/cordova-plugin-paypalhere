var payPalHere = {
    
    isSupported: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "PayPalHere",
            "isInstalled"
        );
    },

    hasSwiper: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "PayPalHere",
            "isSwiperPluggedIn"
        );
    },

    makePayment: function(invoice, successCallback, errorCallback) {
    	
        var payer = encodeURIComponent("some@email.dom");
        var invoiceId = encodeURIComponent("123456");
        var number = encodeURIComponent("0987");
        var uri = "butterapp//";

        var retUrl = encodeURIComponent(uri + "?{result}?Type={Type}&InvoiceId={InvoiceId}&Tip={Tip}&Email={Email}&TxId={TxId}");
        var pphereUrl = "paypalhere://takePayment?accepted=" + encodeURIComponent("cash,card,paypal") + "&returnUrl=" + retUrl;
        pphereUrl += "&InvoiceId=" + invoiceId + "&as=b64&payerPhone=5551234567&step=choosePayment" + "&invoice=" + btoa(JSON.stringify(invoice));

		cordova.exec(
            successCallback,
            errorCallback,
            "PayPalHere",
            "sendPaymentRequest",
            [pphereUrl]
        );
    }
}

module.exports = payPalHere;