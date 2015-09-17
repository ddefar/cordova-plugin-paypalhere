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

    makePayment: function(invoiceData, successCallback, errorCallback) {
    	
        var payer = encodeURIComponent(invoiceData.payer);
        var invoiceId = encodeURIComponent(invoiceData.invoiceId);
        var number = encodeURIComponent(invoiceData.number);
        var uri = invoiceData.uri;
        var invoice = invoiceData.invoice;

        var retUrl = encodeURIComponent(uri + "?{result}?Type={Type}&InvoiceId={InvoiceId}&Tip={Tip}&Email={Email}&TxId={TxId}");
        var pphereUrl = "paypalhere://takePayment?accepted=" + encodeURIComponent("cash,card,paypal") + "&returnUrl=" + retUrl;
        pphereUrl += "&InvoiceId=" + invoiceId + "&as=b64&payerPhone=5551234567&step=choosePayment" + "&invoice=" + btoa(JSON.stringify(invoice));
console.log('*****', pphereUrl);
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