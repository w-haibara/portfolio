export default ({ comp, children }) => (
  <html>
    <head>
      <title>w-haibara.com</title>
      <meta charSet="UTF-8" />
      <title>w-haibara.com</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="灰原 渉のホームページ" />
      <link rel="stylesheet" href="/styles/tailwind.css" />
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
      />
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
