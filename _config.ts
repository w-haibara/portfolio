import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import imagick from "lume/plugins/imagick.ts";
import typography from "npm:@tailwindcss/typography";
import forms from "npm:@tailwindcss/forms";

const site = lume()
  .use(jsx())
  .use(
    tailwindcss({
      options: {
        plugins: [typography, forms],
        theme: {
          extend: {
            fontFamily: {
              sans: ["Noto Sans JP"],
            },
          },
        },
      },
    }),
  )
  .use(postcss())
  .use(imagick())
  .copy("scripts");

site.script(
  "update-hatenablog-posts",
  `curl https://haibara-works.hatenablog.com/rss | yq -p xml '[.rss.channel.item[]] | {"hatenablog": .}' > _data.hatenablog.yml`,
);
await site.run("update-hatenablog-posts");

export default site;
