import React from "react";


function HandypediaInfobox({ handypediaResults }) {
    return (
        <div>
        {handypediaResults.map((item, idx) => {
                return (
                    <div key={idx} className="border-2 p-4">
                        <p className="text-gray-700 dark:text-neutral-200">
                            <span className="text-lg font-bold underline">{item.title}</span>
                            <br />
                            <p className="mt-3">{item.description}</p>
                            <a className="mt-3 text-blue-800 font-bold dark:text-blue-400 block" href={item.url}>
                                Handypedia
                            </a>
                        </p>
                    </div>
                )
            })}
        </div>
    );
}

export default HandypediaInfobox;
