#import <Cordova/CDV.h>
#import <PayPalHereSDK/PayPalHereSDK.h>

@interface PayPalHere : CDVPlugin

- (void)isInstalled:(CDVInvokedUrlCommand*)command;

- (void)isSwiperPluggedIn:(CDVInvokedUrlCommand*)command;

- (void)init:(CDVInvokedUrlCommand*)command;

- (void)sendPaymentRequest:(CDVInvokedUrlCommand*)command;

@end