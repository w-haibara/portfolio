export default function () {
  return (
    <>
      <footer className="bg-white mt-auto">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mt-8 border-t border-gray-100 pt-8">
            <div className="sm:flex sm:justify-between">
              <div className="text-xs text-gray-500">
                <span>source: </span>
                <a
                  href="https://github.com/w-haibara/w-haibara.com"
                  target="_blank"
                  rel="noopener"
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  GitHub
                </a>
                <span className="copyright ml-5">&copy; 2023 w-haibara</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
