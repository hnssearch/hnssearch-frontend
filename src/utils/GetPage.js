const getPage = (location) => {
  let str = location["search"];

  let start = str.indexOf("page=") + 5;
  let end = str.length;

  return Number(str.substring(start, end));
};

export default getPage;
