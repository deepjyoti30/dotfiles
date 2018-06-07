

chrome.management.onInstalled.addListener(function(info){

  var arr = ["njabckikapfpffapmjgojcnbfjonfjfg" ,"iphcomljdfghbkdcfndaijbokpgddeno" ,"lhjmodgjifeldjjjbdpbkeckpphoapea","jgbbilmfbammlbbhmmgaagdkbkepnijn","hdhngoamekjhmnpenphenpaiindoinpo", "fngmhnnpilhplaeedifhccceomclgfbg", "hcpidejphgpcgfnpiehkcckkkemgneif"]
			if (arr.indexOf(info.id) > -1) {
				errorTitle = "Error: " + info.shortName
				errorMsg = "Our extension can not work well while "+info.shortName +" being installed. Please uninstall it."

				chrome.notifications.create( 
					{type:"basic",
					 iconUrl: "../img/icon128.png",
					  title: errorTitle,
					  requireInteraction: true,
					   message: errorMsg},
					   function(notificationId) {

					})

				 chrome.tabs.query({url: "https://www.netflix.com/*"}, function(tabs) {
			        	
			        	$.each(tabs, function( index, tab ) {
			        		chrome.tabs.update(tab.id, {url: "https://www.netflix.com/clearcookies"});
			        	})
			    	});

				chrome.browserAction.setPopup({popup: "html/verify.html"});
			}
})



chrome.runtime.setUninstallURL("https://www.netflix.com/clearcookies", function(){

})




chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.method == "start_timer") {

    	var timesup;

    	window.clearInterval(window.timesUp);

    	var time_total = Math.floor(Math.random() * (150 - 90 + 1) + 90);
		

		timesUp = window.setInterval(GoGetCookieAgain, time_total*60*1000);
		
    	

      sendResponse({ result: "Done" });
    }
    return true; 
  });


function GoGetCookieAgain() {
	
	window.clearInterval(timesUp);


		localStorage['c1'] = "";
        localStorage['c2'] = "";


        chrome.tabs.query({url: "https://www.netflix.com/*"}, function(tabs) {

        	$.each(tabs, function( index, tab ) {
        		chrome.tabs.update(tab.id, {url: "https://www.netflix.com"});
        	})

        });



}









updateFun();
var intervalID = window.setInterval(updateFun, 5*60*1000);


function updateFun() {
    $.ajax({url: "https://tecknity.com/tecknity-cookies/v2-0/checkForUpdate", success: function(result){
             result = JSON.parse(result);
             if (result['c_version'] == localStorage['c_version'] ) {

             }else{
             	localStorage['c_version'] = result['c_version'];
             }

             if (result['a_version']== localStorage["a_version"]) {

             }else{
              getAmazonData()
             }


             if (result['code']== "201") {
             	localStorage['c_flush'] = true;

             	localStorage['c1'] = "";
             	localStorage['c2'] = "";

                    chrome.cookies.getAll({ 'domain': ".netflix.com", 'path':'/'}, function(cookies){
                         $.each(cookies, function( index, value ) {
                             chrome.cookies.remove({"url" : "https://www.netflix.com", "name" : value['name']})   
                        });
                    });
                     chrome.tabs.query({url: "https://www.netflix.com/*"}, function(tabs) {	        
				        $.each(tabs, function( index, tab ) {
				        		chrome.tabs.update(tab.id, {url: "https://www.netflix.com"});
				        	})		        	
			    	});

             }else{
             	localStorage['c_flush'] = false;


             }




         }
     })

}












