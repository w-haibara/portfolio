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
    const test = function (post, search) {
      return [post.title, post.description]
        .join()
        .toLowerCase()
        .includes(search.toLowerCase());
    };

    posts.forEach(
      (post) => (post.element.style.display = test(post, search) ? "" : "none")
    );
  });
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
