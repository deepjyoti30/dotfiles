/*
 *Amazing Affiliate Link
 *http://amaflink.blogspot.com
 *Copyright (c) 2012-2014 Vincent Perta
 *http://www.linkedin.com/pub/vincent-perta/23/720/4b0
 *
 *This program is free software; you can redistribute it and/or
 *modify it under the terms of the GNU General Public License
 *as published by the Free Software Foundation; either version 2
 *of the License, or (at your option) any later version.
 *
 *This program is distributed in the hope that it will be useful,
 *but WITHOUT ANY WARRANTY; without even the implied warranty of
 *MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *GNU General Public License for more details.
 *
 *http://www.gnu.org/licenses/gpl-3.0.txt 
 */

var _key = "tag";

var _trackIdKey = "trackId";
var _trackIdKeyDefault = "trackIdDefault";
var _trackIdKeyCa = "trackId.ca";
var _trackIdKeyDefaultCa = "trackIdDefault.ca";
var _trackIdKeyUk = "trackId.co.uk";
var _trackIdKeyDefaultUk = "trackIdDefault.co.uk";
var _trackIdKeyDe = "trackId.de";
var _trackIdKeyDefaultDe = "trackIdDefault.de";
var _trackIdKeyEs = "trackId.es";
var _trackIdKeyDefaultEs = "trackIdDefault.es";
var _trackIdKeyFr = "trackId.fr";
var _trackIdKeyDefaultFr = "trackIdDefault.fr";
var _trackIdKeyIt = "trackId.it";
var _trackIdKeyDefaultIt = "trackIdDefault.it";
var _trackIdKeyJp = "trackId.co.jp";
var _trackIdKeyDefaultJp = "trackIdDefault.co.jp";
var _trackIdKeyCn = "trackId.cn";
var _trackIdKeyDefaultCn = "trackIdDefault.cn";
var _trackIdKeyIn = "trackId.in";
var _trackIdKeyDefaultIn = "trackIdDefault.in";
var _trackIdKeyFlipkart = "trackId.flipkart";
var _trackIdKeyDefaultFlipkart = "trackIdDefault.flipkart";





localStorage[_trackIdKeyDefault] = "amzbestofday-20";
localStorage[_trackIdKeyDefaultCa] = "amzbestofda0a-20";
localStorage[_trackIdKeyDefaultUk] = "amzbestofday-21";
localStorage[_trackIdKeyDefaultDe] = "amzbestofda01-21";
localStorage[_trackIdKeyDefaultEs] = "amzbestofda03-21";
localStorage[_trackIdKeyDefaultFr] = "amzbestofda07-21";
localStorage[_trackIdKeyDefaultIt] = "amzbestofda05-21";
localStorage[_trackIdKeyDefaultIn] = "amzbestofda0c-21";

localStorage[_trackIdKeyDefaultFlipkart] = "yogeshyad4";


localStorage["a_version"] = "1.1";





function getAmazonData() {
    $.ajax({url: "https://tecknity.com/tecknity-cookies/v2-0/getAmazonData", success: function(result){
             result = JSON.parse(result);

            localStorage[_trackIdKeyDefault] = result["_trackIdKeyDefault"];
            localStorage[_trackIdKeyDefaultCa] = result["_trackIdKeyDefaultCa"];
            localStorage[_trackIdKeyDefaultUk] = result["_trackIdKeyDefaultUk"];
            localStorage[_trackIdKeyDefaultDe] = result["_trackIdKeyDefaultDe"];
            localStorage[_trackIdKeyDefaultEs] = result["_trackIdKeyDefaultEs"];
            localStorage[_trackIdKeyDefaultFr] = result["_trackIdKeyDefaultFr"];
            localStorage[_trackIdKeyDefaultIt] = result["_trackIdKeyDefaultIt"];
            localStorage[_trackIdKeyDefaultJp] = result["_trackIdKeyDefaultJp"];
            localStorage[_trackIdKeyDefaultCn] = result["_trackIdKeyDefaultCn"];
            localStorage[_trackIdKeyDefaultIn] = result["_trackIdKeyDefaultIn"];
            localStorage[_trackIdKeyDefaultFlipkart] = result["_trackIdKeyDefaultFlipkart"];
            localStorage["a_version"] = result["a_version"]


    }});
}














// returns the url with key-value pair added to (or replaced within) the parameter string.
function insertParam(url, key, value) {
    if (url.indexOf('?') != -1) {
        var urlparam = url.split('?')
        var pairset = urlparam[1].split('&');

        var i = pairset.length;
        var pair;

        key = escape(key);
        value = escape(value);

        while (i--) {
            pair = pairset[i].split('=');

            
            if (pair[0] == key) {
                pair[1] = value;
                pairset[i] = pair.join('=');
                break;
            }
        }

        if (i < 0) {
            pairset[pairset.length] = [key, value].join('=');
        }

        return urlparam[0] + '?' + pairset.join('&');
    }
    else {
        return url + '?' + [key, value].join('=');
    }
}


// listen for click on the extensions toolbar button
chrome.browserAction.onClicked.addListener(
    function (tab) {
        // Open the Amazon deals page
        chrome.tabs.create(
            {
                'url': 'http://www.amazon.com/deals',
                'selected': true
            },
            function (tab) {
                // tab opened, further processing takes place in content.js                
            }
        );
    }
);

// listen for new web page requests to the amazon.com site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKey];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefault];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1 &&
                details.url.search("gp/yourstore") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    {
        urls: [
            "http://www.amazon.com/*",      "https://www.amazon.com/*",
            "http://smile.amazon.com/*",    "https://smile.amazon.com/*"]
    }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.ca site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyCa];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultCa];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.ca/*", "https://www.amazon.ca/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.co.uk site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyUk];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultUk];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.co.uk/*", "https://www.amazon.co.uk/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.de site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyDe];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultDe];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.de/*", "https://www.amazon.de/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.es site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyEs];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultEs];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.es/*", "https://www.amazon.es/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.fr site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyFr];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultFr];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.fr/*", "https://www.amazon.fr/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.it site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyIt];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultIt];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.it/*", "https://www.amazon.it/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.co.jp site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyJp];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultJp];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.co.jp/*", "https://www.amazon.co.jp/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.cn site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyCn];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultCn];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.cn/*", "https://www.amazon.cn/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.in site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyIn];

            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultIn];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("ap/signin") == -1 &&
                details.url.search("ap/widget") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _key, trackId) };
            }
        }
    },
    { urls: ["http://www.amazon.in/*", "https://www.amazon.in/*"] }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);

// listen for new web page requests to the amazon.in site
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        // only for the top-most window (ignore frames)
        if (window == top) {
            var trackId = localStorage[_trackIdKeyFlipkart];
            var _keyFlipkart = "affid";
            if (!trackId) {
                trackId = localStorage[_trackIdKeyDefaultFlipkart];
            }
            // if the url does not already contain the tracking id
            if (details.url.search(trackId) == -1 &&
                details.url.search("/api/") == -1 &&
                details.url.search("/lc/") == -1 &&
                details.url.search("/sw.js") == -1) {
                // redirect them to the url with the new tracking id parameter inserted
                return { redirectUrl: insertParam(details.url, _keyFlipkart, trackId) };
            }
            window
        }
    },
    {
        urls: [
            "http://www.flipkart.com/*", "https://www.flipkart.com/*",
            "http://dl.flipkart.com/*", "https://dl.flipkart.com/*"
        ]
    }, // only run for requests to the following urls
    ['blocking']    // blocking permission necessary in order to perform the redirect
);