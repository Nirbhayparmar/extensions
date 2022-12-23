const btn = document.getElementById("btn");
const group = document.getElementById("links");
let previousLinks = localStorage.getItem("links");
const linksList = JSON.parse(previousLinks) || []; //to get the previous links in the array of objects;

function renderLinks() {
	//from the local storage, showing the previous links;
	linksList.forEach((link) => {
		showLink(link.id, link.url);
	});
}

async function buttonController() {
	btn.addEventListener("click", () => {
		let queryOptions = { active: true, currentWindow: true };
		let tabId = "";
		let tabUrl = "";
		chrome.tabs.query(queryOptions, async (tabs) => {
			tabId = tabs[0].id;
			tabUrl = tabs[0].url;
			console.log(tabId + " " + tabUrl);
			await saveLink(tabId, tabUrl);
			await showLink(tabId, tabUrl);
		});
	});
}

async function saveLink(tabId, tabUrl) {
	let linkObj = { url: tabUrl, id: tabId };
	linksList.push(linkObj);
	let linksListString = JSON.stringify(linksList);
	localStorage.setItem("links", linksListString);
}

async function showLink(tabId, tabUrl) {
	let link = `<p><a href=${tabUrl}>url- ${tabUrl}; id- ${tabId}</a></p>`;
	group.insertAdjacentHTML("beforeend", link);
}

renderLinks();
buttonController();

// async function fun() {
// 	btn.addEventListener("click", () => {
// 		let queryOptions = { active: true, currentWindow: true };
// 		let tabId = "";
// 		let tabUrl = "";
// 		chrome.tabs.query(queryOptions, async (tabs) => {
// 			tabId = tabs[0].id;
// 			tabUrl = tabs[0].url;
// 			console.log(tabId + " " + tabUrl);
// 			let link = `<p><a href=${tabUrl}>${tabUrl}</a></p>`;
// 			group.insertAdjacentHTML("beforeend", link);
// 			await sendLink(tabId, tabUrl);
// 		});
// 	});
// }

// async function sendLink(tabId, tabUrl) {
// 	const message = { task: "save", url: tabUrl };
// 	return new Promise(() => {
// 		chrome.tabs.sendMessage(tabId, message, function (response) {
// 			console.log(response);
// 		});
// 	});
// }
// fun();
