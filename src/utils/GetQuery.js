const getQuery = (location) => {
  let str = location["search"];

  let start = str.indexOf("=") + 1;
  let end = str.indexOf("&");
  if (end === -1) {
    end = str.length;
  }

  return str
    .substring(start, end)
    .replace("%21", "!")
    .replaceAll("%20", " ")
    .replace("%3A%2F%2F", "://");
};

export default getQuery;
