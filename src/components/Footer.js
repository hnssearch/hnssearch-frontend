function Footer() {
  return (
    <footer
      className="text-sm bg-neutral-300 text-gray-800 flex flex-wrap w-full p-2 justify-center md:justify-between
      text-gray-800 text-lg dark:text-gray-300 dark:bg-neutral-800"
    >
      <div className="px-8 py-3 flex space-x-3 items-center">
        <p>&copy; 2023 HNSSearch</p>
      </div>
      <div className="flex">
        <ul className="flex space-x-3 items-center">
          <li>
            <a
              href="https://hnssearch.medium.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/hnssearch"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://github.com/HNSSearch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
