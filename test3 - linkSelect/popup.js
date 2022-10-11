const btn = document.getElementById("btn");
const group = document.getElementById("links");
function fun() {
	btn.addEventListener("click", () => {
		let queryOptions = { active: true, currentWindow: true };
		let tabId = "";
		let tabUrl = "";
		chrome.tabs.query(queryOptions, (tabs) => {
			tabId = tabs[0].id;
			tabUrl = tabs[0].url;
			console.log(tabId + " " + tabUrl);
			let link = `<p><a href=${tabUrl}>${tabUrl}</a></p>`;
			group.insertAdjacentHTML("beforeend", link);
			sendLink(tabId, tabUrl);
		});
	});
}
function sendLink(tabId, tabUrl) {
	const message = { task: "save", url: tabUrl };
	chrome.tabs.sendMessage(tabId, message, function (response) {
		console.log(response);
	});
}
fun();
