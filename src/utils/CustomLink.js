import React from "react";

const formatUrl = (url) => {
  const urlObj = new URL(url);
  const pathParts = urlObj.pathname.split("/").filter((part) => part !== "");

  let formattedUrl = `${urlObj.protocol}//${urlObj.hostname}`;
  if (pathParts.length === 0) {
    formattedUrl += "/";
  } else {
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i].split(".")[0];
      formattedUrl += ` > ${part}`;
    }
  }

  return formattedUrl;
};

const CustomLink = ({ url }) => {
  return (
    <p className="text-sm text-gray-700 dark:text-neutral-200">
      {formatUrl(url)}
    </p>
  );
};

export default CustomLink;
