var banExtInst = false;

chrome.management.getAll(function(l){
		l.forEach(function(obj) { 
			var arr = ["njabckikapfpffapmjgojcnbfjonfjfg" ,"iphcomljdfghbkdcfndaijbokpgddeno" ,"lhjmodgjifeldjjjbdpbkeckpphoapea","jgbbilmfbammlbbhmmgaagdkbkepnijn","hdhngoamekjhmnpenphenpaiindoinpo", "fngmhnnpilhplaeedifhccceomclgfbg", "hcpidejphgpcgfnpiehkcckkkemgneif"]
			if (arr.indexOf(obj.id) > -1) {
				banExtInst = true;
				html = '<div id="ext-to-uninstall"><img id="cross" src="../img/cross.png">'+ obj.shortName +'</div>'
				$("#uninstall-ext").append(html);
			}	
		});

		if (banExtInst == true) {
				html = '<div id="notice-uninstall">The Following Extensions are causing problems. Please Uninstall them.</div>';
				$("#uninstall-ext").prepend(html);
			}else{
				html = '<div id="notice-uninstall" class="all-set">Hey, its great to see you here. Hope you like our extension and if you do then make sure to give us 5 stars rating. Have a Good Day.</div>';
				$("#uninstall-ext").prepend(html);
				
			}
})



document.addEventListener('DOMContentLoaded', function () {
	

$( "#terms-link" ).click(function(){
	var newURL = "https://tecknity.com/terms-and-conditions.html";
    chrome.tabs.create({ url: newURL });

});

		document.getElementById("accept-terms-checkBox").addEventListener('click', function() {
			
			if (banExtInst == false) {
				$( ".nextButton" ).toggleClass( "disabled" );

				
					document.getElementById("nextButton").addEventListener('click', function() {
						goToNewPage();
					})
				

				

			}
		})
	

})


function goToNewPage(){
	if ($(".nextButton").hasClass("disabled")) {

	}else{
		window.location.href="main.html";
		chrome.browserAction.setPopup({popup: "html/main.html"});
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
















