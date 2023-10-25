document.addEventListener("alpine:init", () => {
  Alpine.store(
    "posts",
    JSON.parse(
      document.querySelector("#posts-data").getAttribute("data-json")
    ).map((post) =>
      Object.assign(post, {
        element: document.getElementById(post.id),
      })
    )
  );

  Alpine.store("filter", function (posts, search) {
    posts.forEach((post) => (post.element.style.display = "none"));

    posts
      .filter((post) =>
        [post.title, post.description]
          .join()
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .forEach((post) => (post.element.style.display = ""));
  });

  document.getElementById("posts-block").setAttribute(
    "x-data",
    `{
      search: '',
      filter() {
        $store.filter($store.posts, this.search);
      }
    }`
  );

  const searchElement = document.getElementById("posts-search");
  searchElement.setAttribute("x-model", "search");
  searchElement.setAttribute("x-init", "$watch('search', v => filter(v))");
});
