chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender);
	if (request.task === "save") {
		saveLink();
		const response = {
			status: `200 - ok, this link- ${request.url} is saved.`,
		};
		sendResponse(response);
	}
});
function saveLink() {
	console.log("ok");
}
