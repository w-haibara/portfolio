export const layout = "_includes/base.njk";

export default function ({ comp, children }) {
  const body = (
    <article className="prose container mx-auto px-4">{children}</article>
  );
  return (
    <>
      <div className="flex flex-col h-screen">
        <comp.header />
        <div className="mx-auto">{body}</div>
        <comp.footer />
      </div>
    </>
  );
}
