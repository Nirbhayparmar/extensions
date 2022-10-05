const btn = document.getElementById("btn");
function fun() {
	btn.addEventListener("click", () => {
		let queryOptions = { active: true, currentWindow: true };
		let tabId = "";
		let tabUrl = "";
		chrome.tabs.query(queryOptions, (tabs) => {
			tabId = tabs[0].id;
			tabUrl = tabs[0].url;
			console.log(tabId + " " + tabUrl);
			chrome.tabs.sendMessage(tabId, { task: "ice" }, function (response) {
				console.log(response.status);
			});
		});
	});
}
fun();
