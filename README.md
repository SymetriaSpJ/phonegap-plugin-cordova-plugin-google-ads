Google Analytics Plugin with Advertising - demographic data
=======================

This is extended plugin "google-analytics-plugin" by possibility to collect demographic data in Google Analytics.

Currently Google Analytics works at all and:
* Google Analytics collects demographic data (AdvertisingIdCollection) __only on Android platform__
* iOS calls just success when you're trying enable advertising

#Installing

This plugin can be installed through the Cordova CLI in your existing Cordova project:
```bash
cordova plugin add https://github.com/astanecki/cordova-plugin-google-ads.git
```

This plugin is also available on npm if you are using Cordova 5.0+:
```bash
cordova plugin add cordova-plugin-google-ads
```

#JavaScript Usage
In your 'deviceready' handler, set up your Analytics tracker:
* `window.analytics.startTrackerWithId('UA-XXXX-YY', successCallback, errorCallback)`

Tracking PageView:
* `window.analytics.trackView('Screen Title')`

Tracking an Event:
* `window.analytics.trackEvent('Category', 'Action', 'Label', Value)`
Label and Value are optional, Value is numeric

Collecting Advertising / demographic data in Google Analytics:
* `window.analytics.enableAds(successCallback, errorCallback')`

#Building via Phonegap Build
Copy the files manually into your project and add the following to your config.xml files:
```xml
<plugin name="cordova-plugin-google-ads" spec="1.0.1" />
```