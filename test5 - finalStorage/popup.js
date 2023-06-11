const btn = document.getElementById("btn");
const deleteBtn = document.getElementById("deleteBtn");
const group = document.getElementById("links");
let checkboxes;
let previousLinks = localStorage.getItem("links");
let linksList = JSON.parse(previousLinks) || []; //to get the previous links in the array of objects;
group.addEventListener("click", deleteLinks);
function renderLinks() {
	//from the local storage, showing the previous links;
	linksList.forEach((link) => {
		showLink(link.id, link.url, link.title);
	});
}

async function buttonController() {
	btn.addEventListener("click", () => {
		let queryOptions = { active: true, currentWindow: true };
		let tabId = "";
		let tabUrl = "";
		let tabTitle = "";
		chrome.tabs.query(queryOptions, async (tabs) => {
			console.log(tabs);
			tabId = tabs[0].id;
			tabUrl = tabs[0].url;
			tabTitle = tabs[0].title;
			console.log(tabId + " " + tabTitle);
			await saveLink(tabId, tabUrl, tabTitle);
			await showLink(tabId, tabUrl, tabTitle);
		});
	});
}

async function saveLink(tabId, tabUrl, tabTitle) {
	let linkObj = { url: tabUrl, id: tabId, title: tabTitle };
	linksList.push(linkObj);
	let linksListString = JSON.stringify(linksList);
	localStorage.setItem("links", linksListString);
}

async function showLink(tabId, tabUrl, tabTitle) {
	let pClass = "link";
	let link = `<p id="${tabId}" class="${pClass}"><a href=${tabUrl} target="_blank">${tabTitle}</a> <input type="button" id="${tabId}" name="${tabUrl}" value="Delete" class="btn btn-delete"/></p>`;
	group.insertAdjacentHTML("beforeend", link);
}

async function deleteLinks(e) {
	// e.preventDefault();
	if (e.target.value && e.target.value === "Delete") {
		const deletedId = e.target.id;
		const updatedList = linksList.filter((link) => {
			return link.id != deletedId;
		});
		localStorage.setItem("links", JSON.stringify(updatedList));
		const linksElement = document.getElementById(deletedId);
		linksElement.remove();
	}
}

window.onload = () => {
	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		console.log(request, sender);
		if (request.task === "save") {
			console.log("inside popup.js");
			const response = {
				status: 200,
				message: `200 - ok, this link- ${request.url} is saved.`,
			};
			sendResponse(response);
		}
		return true;
	});
};
chrome.contextMenus.onClicked.addListener(handleClick);
function handleClick(info, tab) {
	console.log(info);
	console.log(tab);
}
renderLinks();
buttonController();
