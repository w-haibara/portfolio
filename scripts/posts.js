const match = function (post, search) {
  if (search === "") {
    return true;
  }

  return [post.title, post.desc]
    .join()
    .toLowerCase()
    .includes(search.toLowerCase());
};

Alpine.store("posts", {
  posts: Array.from(document.getElementById("posts-items").childNodes),
  filter(search) {
    this.posts
      .map((item) => {
        return {
          element: item,
          title: item.getElementsByClassName("post-title")[0].textContent,
          desc: item.getElementsByClassName("post-desc")[0].dataset.desc,
        };
      })
      .forEach(
        (post) =>
          (post.element.style.display = match(post, search) ? "" : "none")
      );
  },
});
