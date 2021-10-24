import React from "react";

export default function MuseumSectionDisplay(props) {

    return (
        <details open={props.isOpen}>
            <summary><h2>{props.museumName}</h2></summary>
            <div>
                {props.images}
            </div>
        </details>
    )
}