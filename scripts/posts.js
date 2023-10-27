window.posts = Array.from(
  document.getElementById("posts-items").childNodes
).map((item) => {
  return {
    element: item,
    title: item.getElementsByClassName("post-title")[0].textContent,
    desc: item.getElementsByClassName("post-desc")[0].dataset.desc,
  };
});

window.filterPosts = function (search) {
  const test = function (post, search) {
    return [post.title, post.desc]
      .join()
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  window.posts.forEach(
    (post) => (post.element.style.display = test(post, search) ? "" : "none")
  );
};
