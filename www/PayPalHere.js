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

    makePayment: function(pphereUrl, successCallback, errorCallback) {
    	
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