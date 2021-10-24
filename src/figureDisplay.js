import React from "react";

export default function FigureDisplay(props) {

    return(
        <figure>
            <img
                src={props.imageSrc}
                alt={props.imageTitle}
                loading={props.loading}
                height="300"
                width="auto"
            />
            <figcaption className="title">{props.imageTitle}</figcaption>
        </figure>
    )
}