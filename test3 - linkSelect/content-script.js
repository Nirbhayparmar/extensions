chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender);
	if (request.task === "ice") {
		changeImage();
	}
	const response = { status: "200 - ok" };
	sendResponse(response);
});
