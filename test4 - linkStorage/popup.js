const btn = document.getElementById("btn");
const group = document.getElementById("links");
async function fun() {
	btn.addEventListener("click", () => {
		let queryOptions = { active: true, currentWindow: true };
		let tabId = "";
		let tabUrl = "";
		chrome.tabs.query(queryOptions, async (tabs) => {
			tabId = tabs[0].id;
			tabUrl = tabs[0].url;
			console.log(tabId + " " + tabUrl);
			let link = `<p><a href=${tabUrl}>${tabUrl}</a></p>`;
			group.insertAdjacentHTML("beforeend", link);
			await sendLink(tabId, tabUrl);
		});
	});
}

async function sendLink(tabId, tabUrl) {
	const message = { task: "save", url: tabUrl };
	return new Promise(() => {
		chrome.tabs.sendMessage(tabId, message, function (response) {
			console.log(response);
		});
	});
}
fun();
