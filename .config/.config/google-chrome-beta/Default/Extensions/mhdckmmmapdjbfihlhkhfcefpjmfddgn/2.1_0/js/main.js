chrome.management.getSelf(function(info){
	localStorage['version'] = info.version;
})

document.addEventListener('DOMContentLoaded', function() {
	if (localStorage['version'] < localStorage['c_version']) {
		showError("Please Update the extension!!!");
	}else{
		var getBodyTextBtn = document.getElementById('getTabTextBtn');
		var deleteCookiesBtn = document.getElementById('deleteCookiesBtn');
		var goToCookie = document.getElementById('goToCookie');
		var howToUse = document.getElementById('howToUse');

		howToUse.addEventListener('click', function() {
			

		 chrome.tabs.create({url: "https://tecknity.com/tecknity-cookies-extension"})
		

		});

		goToCookie.addEventListener('click', function() {
			chrome.tabs.create({url: "https://tecknity.com/free-netflix-account-cookies"})
		});

		getBodyTextBtn.addEventListener('click', function() {
			getTextFromTab();
		});

		deleteCookiesBtn.addEventListener('click', function() {
			try {
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
			}catch (e) {
				showError("Some Error has Occured!!")
			}
		});

	}
})








function getTextFromTab(){

	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
   		try{
   			chrome.tabs.sendRequest(tabs[0].id, {method: "getText"}, function(response) {

   				try{
   					if(response.method=="getText"){
   						bodyText = response.data;
   						if(isJson(bodyText)){
   							bodyText = JSON.parse(bodyText);
   							setCookiesFromJson(bodyText);
   						}else{
   							showError("Error: Not a Valid Cookie.");
   						}

   					}
   				}catch(e){
   					showError("Error: Refresh the page to continue.");
   				}


   			});
   		}catch(e){
   			showError("Error: Refresh the page to continue.");
   		}
   	});
}






function setCookiesFromJson(jsonContent){

	try {
		cookies_json = jsonContent['cookie'];
			if (jsonContent['cookie_n']=="Tecknity") {

				 c1 = jsonContent['cookie']['SecureData1'];
				 c2 = jsonContent['cookie']['SecureData2'];


				 if (c1 != null && c2 != null) {

					 

					if (localStorage['c_flush'] == "true") {

						chrome.tabs.create({url: "https://www.netflix.com"})

					}else{
						
						
						localStorage['c1'] = "NetflixId="+c1;
						localStorage['c2'] = "SecureNetflixId="+c2;



						chrome.runtime.sendMessage({method: "start_timer"}, function(response) {
						  	
						});


						chrome.tabs.create({url: "https://www.netflix.com/"})

					}


				 }else{
				 	showError("Not A Valid Cookie.")
				 }

				
			}else{
				showError("Some Error has Occured!!")
			}
		
	}catch (e) {
		showError(e)
	}
}







function isJson(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}


function showError(string){
	$(".notify-box").addClass("error");
	$(".notify-box").text(string);
}


function logJson(json){
	chrome.tabs.executeScript({
		code: 'console.log(' + JSON.stringify(json) + ')'
	});
}




function logString(string){
	chrome.tabs.executeScript({
		code: 'console.log(String("'+string+'"));'
	});
}


















