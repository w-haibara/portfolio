export const layout = "_includes/base.jsx";

export default function (data) {
  const works = data.works.map((work, ind) => (
    <li key={"work-" + ind}>
      <p>
        <span>{work.year}年</span>
        <a href={work.link} target="_blank" rel="noopener" className="px-2">
          {work.title}
        </a>
      </p>
      <p className="px-4 text-sm">{work.desc}</p>
    </li>
  ));

  return (
    <>
      <h1>Works</h1>
      <ul className="py-5">{works}</ul>
    </>
  );
}
