document.body.innerHTML = "you are fired.";
// chrome.runtime.sendMessage("hello background.", (response) => {
// 	console.log(response);
// });
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	console.log(message);
	console.log(sender);
	sendResponse("hi how are you");
});
