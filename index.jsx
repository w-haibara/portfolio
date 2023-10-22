export const layout = "_includes/base.jsx";

export default function (data) {
  const contacts = data.contacts.map((contact, ind) => (
    <li key={"contant-" + ind}>
      <span>{contact.service}</span>
      <span className="px-2">
        {contact.link ? (
          <a href={contact.link} target="_blank" rel="noopener">
            {contact.name}
          </a>
        ) : (
          <span>{contact.name}</span>
        )}
      </span>
    </li>
  ));

  return (
    <>
      <h1>Profile</h1>
      <p>
        北海道産のソフトウェアエンジニア。
        <br />
        Webサーバーサイドを中心に、インフラ・セキュリティなどの技術に関心があります。
      </p>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <img src="/img/image.png" />
        </div>
        <div className="basis-1/2">
          <ul className="py-5">{contacts}</ul>
        </div>
      </div>
    </>
  );
}
