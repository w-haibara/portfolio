export default function () {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block" href="/">
            <code className="text-xl text-gray-800 transition hover:text-gray-500/75">
              w-haibara.com
            </code>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Profile
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/logs"
                  >
                    Logs
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/works"
                  >
                    Works
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/posts"
                  >
                    Posts
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
