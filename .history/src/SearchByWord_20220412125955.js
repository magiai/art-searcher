import React, { useState } from "react";
import ApiResults from "./ApiResults";

export default function SearchByWork() {

    const [searchedSubject, setSearchedSubject] = useState({});

    const watchTypedPhrase = ({ target }) => {
        const { name, value } = target;

        setSearchedSubject((prevSearchedSubject) => ({
            ...prevSearchedSubject,
            [name]: value
        }));
    };

    const submitPhrase = (event) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <form onSubmit = { submitPhrase }>
                <input type="search" name="subject" placeholder="owl" value={searchedSubject.subject || 'owl'} onChange={watchTypedPhrase}/>
            </form>
            <ApiResults searchedSubject={searchedSubject.subject } />
            {/* <ApiResults searchedSubject={'owl'} /> */}
        </React.Fragment>
    )
}