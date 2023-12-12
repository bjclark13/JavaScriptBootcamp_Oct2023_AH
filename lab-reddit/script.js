"use strict";
{
  const addRedditPost = (title, link, thumbnail) => {
    const post = document.createElement("article");

    const heading = document.createElement("h2");
    heading.innerText = title;

    const button = document.createElement("a");
    button.classList.add("button");
    button.innerText = "View on Reddit";
    button.setAttribute("href", `https://reddit.com/${link}`);

    if (thumbnail && thumbnail != "self") {
      const img = document.createElement("img");
      post.append(heading, img, button);
      img.setAttribute("src", thumbnail);
    } else {
      post.append(heading, button);
    }

    document.querySelector("main").append(post);
  };

  //   fetch("https://www.reddit.com/r/aww/.json")
  //     .then((response) => {
  //         return response.json()
  //     })
  //     .then((data) => {
  //         for (const child of data.data.children) {
  //             if (!child.data.is_self)
  //                 addRedditPost(child.data.title, child.data.permalink, child.data.thumbnail)
  //         }
  //     })
  //     .catch((error) => console.log(error));
  const fetchReddit = async () => {
    const response = await fetch("https://www.reddit.com/r/aww/.json");
    const redditData = await response.json();

    const { children } = redditData.data;

    for (const child of children) {
      if (!child.data.is_self) {
        const { title, permalink, thumbnail } = child.data;

        addRedditPost(title, permalink, thumbnail);
      }
    }
  };

  fetchReddit();
}
