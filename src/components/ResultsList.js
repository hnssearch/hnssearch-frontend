import protect_icon from "../assets/images/ssl.png";
import CustomLink from "../utils/CustomLink";
import React from "react";

const ResultsList = ({ hits }) => (
  <div>
    {hits.map((item, idx) => {
      const lastCheckedTimestamp = item.last_checked.$date;
      const lastCheckedDate = new Date(lastCheckedTimestamp);
      const formattedDate = `${lastCheckedDate.getDate()}/${
        lastCheckedDate.getMonth() + 1
      }/${lastCheckedDate.getFullYear()}`;

      return (
        <div
          className="px-5 py-2 mb-3 md:mb-0 md:py-5 md:ml-28 md:mr-10 md:max-w-4xl break-words bg-neutral-100
             dark:bg-neutral-700"
          key={idx}
        >
          <div>
            <div>
              <div className="flex items-center">
                {item.cert === "true" && (
                  <img
                    className="h-4 float-left mr-1"
                    src={protect_icon}
                    alt="protect_icon"
                    title={`verified https available | checked: ${formattedDate}`}
                  />
                )}
                <p className="flex text-sm text-gray-700 dark:text-neutral-200">
                  <CustomLink url={item.url_no_dot} />
                </p>
              </div>
              <a
                className="text-lg text-blue-800 font-bold dark:text-blue-400"
                href={item.url_no_dot}
              >
                {item.title}
              </a>
              <p className="text-gray-700 dark:text-neutral-200">
                {item.summary &&
                item.summary.length > 0 &&
                !item.summary.toLowerCase().includes("unknown")
                  ? item.summary.substring(0, 300)
                  : item.description?.length > 25
                  ? item.description.substring(0, 300)
                  : item.content.substring(0, 300)}
                {(item.summary &&
                  item.summary.length > 0 &&
                  item.summary.length > 300) ||
                (item.description?.length > 25 &&
                  item.description?.length > 300) ||
                ((item.description === null ||
                  item.description?.length <= 25) &&
                  item.content.length > 300)
                  ? "..."
                  : ""}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default ResultsList;
