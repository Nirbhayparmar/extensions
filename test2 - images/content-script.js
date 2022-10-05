const iceCreamImages = [
	"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	"https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
	"https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
	"https://images.unsplash.com/photo-1592413890637-ea80fb4ed093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
];
const siteImage = document.getElementsByTagName("img");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log(request, sender);
	if (request.task === "ice") {
		changeImage();
	}
	const response = { status: "200 - ok" };
	sendResponse(response);
});

function changeImage() {
	for (let i = 0; i < siteImage.length; i++) {
		const randImg = Math.floor(Math.random() * iceCreamImages.length);
		siteImage[i].src = iceCreamImages[randImg];
	}
}
