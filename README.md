- first only make an extension that will disable the trending bar in the twitter to test.
- first task is to make chrome extension that can save the tweets in database and shows it in extension UI.
- aria-label="Timeline: Trending now" (for twitter trending bar)
  - https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/
  - https://developer.chrome.com/docs/extensions/mv3/content_scripts/
  - first I need to understand the chrome API and the file structures.

---

on 10/09/2022

- I checked to change images on the displayed pages, from a video, it worked, so now I got to know that how to get the details of the current tab like url, id etc.
- Now for my bookmark extension I can use that to get that current url and then store it in any database.

---

on 05/10/2022

- I experimented with manipluating the popup.html by clicking the button and saving the link of the page on the extension popup.
- Next time I want to experiment with local storage to save the links I have clicked/saved. It is like building a note taking application but for chrome extensions.

---

on 11/10/2022

- I experimented with message passing between popup.js and content script, and read about local storage and chrome storage api.
- Next time I will try about actually using storage to store links.
