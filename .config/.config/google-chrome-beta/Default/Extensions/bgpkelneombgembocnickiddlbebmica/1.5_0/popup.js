window.onload = function () {
    chrome.runtime.sendMessage({ type: "stat" }, function (response) {
        document.getElementById("chk").checked = !response.isDisabled;
    });
    document.getElementById("chk").addEventListener('click', function() {
        chrome.runtime.sendMessage({ type: "cmd", disable: !this.checked });
        window.close();
    });
};


