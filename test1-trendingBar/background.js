chrome.tabs.onActivated.addListener((tab) => {
	chrome.tabs.get(tab.tabId, (currentTabdata) => {
		// console.log(currentTabdata);
		if (
			currentTabdata.url == "https://www.nirbhayparmar.com/" ||
			currentTabdata.url == "https://www.jimmytaravia.com/"
		) {
			chrome.scripting.executeScript({
				target: { tabId: currentTabdata.id },
				files: ["content - script.js"],
			});
		}
		setTimeout(() => {
			chrome.tabs.sendMessage(
				tab.tabId,
				`hello boy your tabId is - ${tab.tabId}`,
				(response) => {
					console.log(response);
				}
			);
		}, 5000);
	});
});
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// 	console.log(message);
// 	console.log(sender);
// 	sendResponse(sender);
// });
