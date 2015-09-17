# cordova-plugin-paypalhere

A plugin for Cordova that allows for communication with the [PayPal Here](https://www.paypal.com/us/webapps/mpp/credit-card-reader) mobile application.
It can check weather the PayPal Here app is installed, and request it to make a payment with the passed data.

## Installation

```
cordova plugin add https://github.com/ddefar/cordova-plugin-paypalhere.git
```

## Usage

To check if PayPal Here is installed:

```
payPalHere.isSupported(
    function() {  // Success callback
        alert('PayPal Here is available!');
    },
    function() {  // Error callback
        alert('PayPal Here not available :(');
    }
);

```

To send an invoice:

```

payPalHere.makePayment(
    invoiceData,
    function(response) {  // Success callback
        alert('Purchase went well!');
    },
    function(response) {  // Error callback
        alert('Some-ting wong :(');
    }
);

```

Example of *invoiceData*:

```
var invoiceData = {
    "payer": "some@email.dom",
    "invoiceId": "jd84yr",
    "number": "676879",
    "uri": "butterapp//",
    "invoice": {
        "paymentTerms": "DueOnReceipt",
        "discountPercent": "0",
        "currencyCode": "USD",
        "number": "1457",
        "payerEmail": "foo@bar.com",
        "itemList": {
            "item": [
                {
                    "taxRate": "8.5000",
                    "name": "Curtains",
                    "description": "Blue curtains",
                    "unitPrice": "29.99",
                    "taxName": "Tax",
                    "quantity": "1"
                },
                {
                    "taxRate": "0",
                    "name": "Delivery Fee",
                    "description": "Delivery Fee",
                    "unitPrice": "5.0",
                    "taxName": "Tax",
                    "quantity": "1"
                }
            ]
        }
    }
};

```
