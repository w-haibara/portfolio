export const layout = "_includes/base.jsx";

export default function (data) {
  const logs = data.logs.map((log, ind) => (
    <li key={"log-" + ind}>
      <span>{log.year}年</span>
      <span className="px-2">{log.title}</span>
    </li>
  ));

  return (
    <>
      <h1>Logs</h1>
      <ul className="py-5">{logs}</ul>
    </>
  );
}
