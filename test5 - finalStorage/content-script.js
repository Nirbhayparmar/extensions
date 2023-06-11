// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	console.log(request, sender);
// 	if (request.task === "save") {
// 		saveLink(request.url);
// 		const response = {
// 			status: `200 - ok, this link- ${request.url} is saved.`,
// 		};
// 		sendResponse(response);
// 	}
// 	return true;
// });

// function saveLink(url) {
// 	console.log("ok");
// 	let linkObj = { link: url };
// 	chrome.storage.local.set(linkObj, () => {
// 		console.log("link is saved");
// 	});
// 	chrome.storage.local.get(null).then((data) => console.log(data));
// }

// NOT needed for local storage.
console.log("hello from content script");
chrome.contextMenus.onClicked.addListener(handleClick);

async function handleClick(info, tab) {
	console.log("hello from context menu");
	console.log(info);
	console.log(tab);
	const res = await chrome.tabs.sendMessage(tab.id, { task: "save", tab });
	if (res.status === 200) {
		console.log("link is saved, hello from content script");
	}
}
