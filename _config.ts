import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume()
  .use(jsx())
  .use(
    tailwindcss({
      options: {
        plugins: [typography],
      },
    })
  )
  .use(postcss())
  .copy("img");

export default site;
