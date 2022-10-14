chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender);
	if (request.task === "save") {
		saveLink(request.url);
		const response = {
			status: `200 - ok, this link- ${request.url} is saved.`,
		};
		sendResponse(response);
	}
	return true;
});

function saveLink(url) {
	console.log("ok");
	let linkObj = { link: url };
	chrome.storage.local.set(linkObj, () => {
		console.log("link is saved");
	});
	chrome.storage.local.get(null).then((data) => console.log(data));
}
