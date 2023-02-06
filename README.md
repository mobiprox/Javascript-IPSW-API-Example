# Javascript-IPSW-API-Example
An example way of getting Apple IPSW firmware from API call using Javascript and displaying the information on any HTML or other forms of websites.

The API used here is from ipsw.me accessible via https://ipswdownloads.docs.apiary.io/. 

## The different use cases

We have two different use cases here;

### Getting IPSW firmware from iOS/iPadOS version

One of the JavaScript file is used when you want to list all firmware files for a particular iOS version. This will therefore get all firmware files for different iDevices for the version in question. Here, we use the JavaScript ``` fetch()`` to make the API call to https://api.ipsw.me/v4/ipsw/16.1.1.

As you can see on the API link, we are getting IPSW for iOS/iPadOS 16.1.1. By simply changing the iOS/iPadOS version number, you can get different IPSW firmware files.

The application of this can be found here https://www.ipsw-dl.com/2022/11/download-ios-1611-ipados-1611-ipsw.html

### Getting IPSW firmware from firmware identifier

This option is suitable when you will want to always get the latest signed IPSW firmware for a particular iDevice. Here, the API link we use is https://api.ipsw.me/v4/device/iPhone14,8. Here, the ```iPhone14,8``` is the device identifier. By simply changing it, you can get and list different firmware files for different iDevices.

A demo use case can be found on the ipsw-dl.com website here https://www.ipsw-dl.com/2022/10/can-latest-ipsw-firmware-files-for.html
