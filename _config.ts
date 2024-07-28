import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

import tailwindcss from "lume/plugins/tailwindcss.ts";
import typography from "npm:@tailwindcss/typography";
import forms from "npm:@tailwindcss/forms";

import postcss from "lume/plugins/postcss.ts";
import transformImages from "lume/plugins/transform_images.ts";
import favicon from "lume/plugins/favicon.ts";
import inline from "lume/plugins/inline.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume()
  .use(jsx())
  .use(
    tailwindcss({
      options: {
        plugins: [typography, forms],
      },
    }),
  )
  .use(postcss())
  .use(transformImages())
  .use(favicon({
    input: "/img/image.png",
  }))
  .use(inline())
  .use(minifyHTML())
  .use(sitemap());

site.script(
  "update-hatenablog-posts",
  `curl https://haibara-works.hatenablog.com/rss | yq -p xml '[.rss.channel.item[]] | {"hatenablog": .}' > _data.hatenablog.yml`,
);
await site.run("update-hatenablog-posts");

export default site;
