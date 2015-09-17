#import <Cordova/CDV.h>

@interface PayPalHere : CDVPlugin

- (void)isInstalled:(CDVInvokedUrlCommand*)command;

- (void)isSwiperPluggedIn:(CDVInvokedUrlCommand*)command;

- (void)sendPaymentRequest:(CDVInvokedUrlCommand*)command;

@end