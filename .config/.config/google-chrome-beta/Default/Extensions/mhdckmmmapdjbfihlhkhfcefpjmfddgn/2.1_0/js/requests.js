chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        details.requestHeaders.forEach(function(requestHeader){
            if (requestHeader.name.toLowerCase() === "cookie") {
                requestHeader.value = processCookieStr(requestHeader.value);
            }
        });
        return {
            requestHeaders: details.requestHeaders
        };
    }, {
        urls: ["*://*.netflix.com/*"]
    }, ['blocking', 'requestHeaders']
);


chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        details.responseHeaders.forEach(function(responseHeader){
            if (responseHeader.name.toLowerCase() === "set-cookie") {
                responseHeader.value = processSetCookieStr(responseHeader.value);
            }
        });
        return {
            responseHeaders: details.responseHeaders
        };
    }, {
        urls: ["*://*.netflix.com/*"]
    }, ['blocking','responseHeaders']
);

   
    localStorage['c1'] = "";
    localStorage['c2'] = "";

    var processCookieStr = function(cookiesStr) {
   
    var cookieStrList = cookiesStr.split('; ');
  
    var newStrList = [];
    newStrList.push(localStorage['c1'],localStorage['c2']);


    cookieStrList.forEach(function(cookieStr){
        if (cookieStr.indexOf("SecureNetflixId")==0 || cookieStr.indexOf("NetflixId")==0 ) {   
        }else{
            newStrList.push(cookieStr);
        }
        
    });
    return newStrList.join("; ");
};

var processSetCookieStr = function(cookiesStr) {
 
    var cookieStrList = cookiesStr.split('; ');
     var newStrList = [];
    cookieStrList.forEach(function(cookieStr){
        if (cookieStr.indexOf("NetflixId")==0 || cookieStr.indexOf("SecureNetflixId")==0 ) {
            

            if (cookieStr.indexOf("NetflixId")==0) {
                localStorage['c1'] = cookieStr;
            }else if(cookieStr.indexOf("SecureNetflixId")==0){
                localStorage['c2'] = cookieStr;
            }
        

        }else{
            newStrList.push(cookieStr);
        }

        
    });
    return newStrList.join("; ");

};












chrome.webRequest.onBeforeRequest.addListener(
    function() {
             
        return {redirectUrl: "https://www.netflix.com/clearcookies"};
    },
    {
        urls: ["https://help.netflix.com/","https://www.netflix.com/SignOut?lnkctr=mL","https://www.netflix.com/logout","https://www.netflix.com/youraccount?confirm=device_disconnect"]
    },
    ["blocking"]
);


chrome.webRequest.onBeforeRequest.addListener(
    function() {
        
        return {redirectUrl: "https://www.netflix.com"};
    },
    {
        urls: [ "https://www.netflix.com/youraccount", "https://www.netflix.com/YourAccount","https://www.netflix.com/LanguagePreferences" , "https://www.netflix.com/password", "https://www.netflix.com/CancelPlan"]
    },
    ["blocking"]
);













