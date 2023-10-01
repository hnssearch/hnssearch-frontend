import React, { useState, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function MissingSitesPage() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    const [showClearIcon, setShowClearIcon] = useState(false);

    const inputRef = useRef();

    const onSubmit = (data) => {
        data.domains = inputRef.current.value.trim();
        if (!data.domains) return;
        axios
            .post("https://eolqdothkmp33pt.m.pipedream.net", data)
            .then(() => {
                setSuccessMessage("Thanks for submitting! We'll add the domains soon 😊");
                setValue("domains", "");
                setShowClearIcon(false);
                inputRef.current.value = "";
            })
            .catch((e) => console.error(e));
    };

    const onInputChange = (e) => {
        setShowClearIcon(e.target.value.trim() !== "");
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            <header className="flex w-full p-3 justify-between text-gray-800 text-lg dark:text-gray-300">
                <div className="flex space-x-3 items-center">
                    <Link className="link ml-3" to="/dwebpulse">
                        dwebpulse
                    </Link>
                </div>
                <div className="flex space-x-3 items-center mr-3">
                    <Link className="link ml-3" to="/">
                        Search
                    </Link>
                    <Link className="link ml-3" to="/stats">
                        Stats
                    </Link>
                    <a href="https://docs.hnssearch.io/" className="link">
                        About
                    </a>
                </div>
            </header>

            <div className="flex flex-col flex-grow w-full items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mt-auto mb-auto w-4/5">
                    <h1 className="text-gray-800 text-3xl md:text-4xl dark:text-gray-300 mt-auto md:block md:mb-10 text-center">
                        Submit your missing Handshake sites!
                    </h1>
                    <div className="flex w-full mb-5 mt-10 max-w-sm rounded-full border border-gray-300 items-center pl-7 pr-2 py-4
        sm:max-w-xl lg:max-w-2xl focus-within:shadow-sm hover:shadow-sm">
                        <input
                            {...register("domains")}
                            onChange={onInputChange}
                            ref={inputRef}
                            placeholder="Enter your domains"
                            className="flex-grow overflow-hidden focus:outline-none text-xl dark:text-gray-300 bg-neutral-100 dark:bg-neutral-900"
                        ></input>
                        {showClearIcon && (
                            <XMarkIcon
                                className="h-7 sm:inline-flex sm:mr-3 pr-4 cursor-pointer text-gray-800 dark:text-gray-300"
                                onClick={() => {
                                    setValue("domains", "");
                                    setShowClearIcon(false);
                                }}
                            />
                        )}
                    </div>
                    <button type="submit" className="bg-gray-200 p-3 px-5 mt-5 rounded-full border border-gray-300 text-gray-800 text-md
            ring-gray-400 hover:ring-1 focus:outline-none hover:shadow-md mb-5">
                        {isSubmitting ? "Submitting" : "Submit"}
                    </button>
                    {successMessage && <p className="mt-2 text-green-500 text-center">{successMessage}</p>}
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default MissingSitesPage;
