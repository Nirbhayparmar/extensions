const propertiesObj = {
	id: "1",
	title: "save this page to PageSaver",
};
chrome.contextMenus.create(propertiesObj);
// chrome.contextMenus.onClicked.addListener(handleClick);

// async function handleClick(info, tab) {
// 	console.log("hello from context menu");
// 	console.log(info);
// 	console.log(tab);
// 	const res = await chrome.tabs.sendMessage(tab.id, { task: "save", tab });
// 	if (res.status === 200) {
// 		console.log("link is saved, hello from background");
// 	}
// }

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ["content-script.js"],
	});
});
