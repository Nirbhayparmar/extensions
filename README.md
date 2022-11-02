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

---

on 14/10/2022

- I tryed local storage but it is not working, I think.
- But I tried message passing again but this time it is creating a lot of errors. So I searched it on the internet and finds a video - link is here (link)[https://www.youtube.com/watch?v=qfdaikjP4Tg], it helped me to solve this issue, **_issue is still not solved_**.
- I tried using async and await to solve this issue, initially, I think that issue is resolved but it is not, so I might try different solution.
- The problem is when the site stays idle, then the reciever end(contentscript.js) is not loaded so the sender(popup.js) is not able to find the reciever, and returns undefined and throw the error that receiver end is not found.
- things to learn now
  - what is promises and how are they helping us to work asynchronously
  - learn about async and await syntax and asynchronus JavaScript in detail.
  - read about message passing in chrome extensions in detail from internet
  - learn about local storage and how to access them and how to check them

---

on 2/11/2022

- I again tried running the extension, it is working(the message passing part), I think the problem I was facing earlier is related to some other issue, but I can deal with it later if it arises again, because in general problem is related to the content script is now loaded when the message is sent so I have added asynchronus javascript that will handle that part(I have to learn more about asynchronus javascript but still...).
- Now I should try showing the stored value(via chrome.storage) in extension popup.
  - in making that I will have to know more about read function of chrome.storage and its scope related to contentscript.js(if is accesible from contentscript.js and popup.js also).
  - then using js dome manipluation I can add html element in popup html.
