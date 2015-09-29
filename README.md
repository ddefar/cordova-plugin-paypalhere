# cordova-plugin-paypalhere

A plugin for Cordova that allows for communication with the [PayPal Here](https://www.paypal.com/us/webapps/mpp/credit-card-reader) mobile application.
It can check weather the PayPal Here app is installed, and request it to make a payment with the passed data.

## Installation

```
cordova plugin add https://github.com/ddefar/cordova-plugin-paypalhere.git --variable URL_SCHEME=butter
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
            "payer": "d.defar@gmail.com",
            "invoiceId": "lplpy64yr9",
            "number": "6j998799",
            "uri": "butter://hfeifhie",
            "invoice": {
                "paymentTerms": "DueOnReceipt",
                "discountPercent": "0",
                "currencyCode": "USD",
                //"number": "14576",
                "payerEmail": "d.defar@gmail.com",
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

Plugin also contains a preBuild hook that adds a js fix for *handleOpenURL* to index html. Instead of *handleOpenURL* please use 

```

    var handleOpenURLScheme = function(url) {
        alert('***uriSchemeHandle***');
    } 

```
