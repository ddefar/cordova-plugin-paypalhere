#import "PayPalHere.h"
#import <Cordova/CDV.h>

@implementation PayPalHere

- (void)isInstalled:(CDVInvokedUrlCommand*)command {
    
    CDVPluginResult* pluginResult = nil;
    
    NSString* scheme =  @"paypalhere://";
    
    if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:scheme]]) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:(true)];
    }
    else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsBool:(false)];
    }
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    
}

- (void)isSwiperPluggedIn:(CDVInvokedUrlCommand*)command {

	CDVPluginResult* pluginResult = nil;

	pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:(true)];

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}


- (void)init:(CDVInvokedUrlCommand *)command {
  [self.commandDelegate runInBackground:^{
    [PayPalHereSDK selectEnvironmentWithType:ePPHSDKServiceType_Sandbox];
    
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
  }];
}

- (void)sendPaymentRequest:(CDVInvokedUrlCommand*)command {

	CDVPluginResult* pluginResult = nil;
    
	
	NSString* invoice = [command.arguments objectAtIndex:0];

	if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:invoice]]) {
		[[UIApplication sharedApplication] openURL:[NSURL URLWithString:invoice]];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsBool:(true)];
    }
    else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsBool:(false)];
    }

	[self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

}

@end