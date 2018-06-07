chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
            sendResponse({data: document.all[0].innerText, method: "getText"}); 
        }
    }
);





