export default ({ comp, children }) => (
  <html lang="ja">
    <head>
      <title>w-haibara.com</title>
      <meta charSet="UTF-8" />
      <title>w-haibara.com</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="灰原 渉のホームページ" />
      <link rel="stylesheet" href="/styles/tailwind.css" />
      <script src="/scripts/pageview.js" inline="true"></script>
    </head>
    <body>
      <comp.header />
      <div className="mx-auto">
        <article className="prose container mx-auto px-4">
          {children}
        </article>
      </div>
      <comp.footer />
    </body>
  </html>
);
