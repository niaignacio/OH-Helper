//alert("Hello from your OH Extension!")
//console.log("hello!");
	
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //console.log("heeere~")
    if( request.message === "clicked_browser_action" ) {
      chrome.tabs.executeScript(null,{file:"popup.html"})
      //var firstHref = $("a[href^='http']").eq(0).attr("href");
      //console.log(firstHref);
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
    }
  });